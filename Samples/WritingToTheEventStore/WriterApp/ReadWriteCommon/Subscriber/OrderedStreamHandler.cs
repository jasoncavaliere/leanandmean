using System;
using System.Net;
using System.Text;
using EventStore.ClientAPI;
using Newtonsoft.Json;
using ReadWriteCommon.Publisher;
namespace ReadWriteCommon.Subscriber
{
    public interface IOrderedStreamHandler<TEventType>
    {
        void ReadStream();
    }
    public abstract class OrderedStreamHandler<TEventType> : IOrderedStreamHandler<TEventType>
    {
        private readonly IHandleEvent<TEventType> _handleOrderCreated;
        private readonly EventStream _stream;

        
        protected OrderedStreamHandler(IHandleEvent<TEventType> handleOrderCreated)
        {
            _handleOrderCreated = handleOrderCreated;
            _stream = GetStreamInfo();
        }
        public IEventStoreConnection BuildConnection()
        {
            var settings = ConnectionSettings.Create()
                .LimitRetriesForOperationTo(1)
                .LimitAttemptsForOperationTo(1)
                .LimitConcurrentOperationsTo(1)
                .FailOnNoServerResponse()
                .LimitReconnectionsTo(5);
            return EventStoreConnection.Create(settings, new IPEndPoint(IPAddress.Loopback, 1113));
        }
        public EventStream GetStreamInfo(string streamName = null)
        {
            return new EventStream
            {
                EventFullTypeName = typeof(TEventType).FullName,
                StreamName = typeof(TEventType).Name
            };
        }

        public void ReadStream()
        {
            var conn = BuildConnection();
            conn.ConnectAsync().Wait();
            conn.SubscribeToStreamFrom(_stream.StreamName, StreamPosition.Start ,true,
                (_, x) =>
                {
                    Console.WriteLine("Starting event {0}", x.Event.EventNumber);
                    try
                    {
                        var data =
                            JsonConvert.DeserializeObject<TEventType>(Encoding.ASCII.GetString(x.Event.Data));
                      

                        _handleOrderCreated.Handle(data);
                        Console.WriteLine("Wrote event # {0}, type {1}", x.Event.EventNumber, data.GetType().FullName);
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine("Error from event # {0}, type {1}", x.Event.EventNumber, ex.Message);
                        throw;
                    }
                });
            Console.WriteLine("waiting for events. press enter to exit");
            Console.ReadLine();
        }
        
    }
}