using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using EventStore.ClientAPI;
using Newtonsoft.Json;
namespace WriterApp.Publisher
{
    public interface IEventPublisher<T> where T : PublishedEvent<T>, new()
    {
        PublishResponse<TReturnType> Publish<TReturnType>(T item) where TReturnType : new();
    }

    public class EventPublisher<T> : IEventPublisher<T> where T : PublishedEvent<T>, new()
    {
       
        public EventStream GetStreamInfo<TEventType>(string streamName = null) where TEventType : PublishedEvent<TEventType>, new()
        {
            return new EventStream
            {
                EventFullTypeName = typeof(TEventType).FullName,
                StreamName = typeof(TEventType).Name
            };
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


        public PublishResponse<TReturnType> Publish<TReturnType>(T item) where TReturnType : new()
        {
            var stream = GetStreamInfo<T>();
            var conn = BuildConnection();
            conn.ConnectAsync().Wait();
            var publishedEvent = GetEventDataFor(item);
            conn.AppendToStreamAsync(stream.StreamName, ExpectedVersion.Any, publishedEvent).Wait();
            conn.Close();

            return new PublishResponse<TReturnType>
            {
                Success = true,
                Payload = new TReturnType()
            };
        }
     


        public EventData GetEventDataFor(T item)
        {
            var eventId = Guid.NewGuid();
            bool isJson = true;
            var eventType = GetEventType();
            var eventDataFor = new EventData(eventId, eventType, isJson, GetSerializedBytes(item), GetSerializedBytes(new {}));
            eventDataFor.
            return eventDataFor;
        }

        public byte[] GetSerializedBytes<U>(U input)
        {
            return Encoding.ASCII.GetBytes(JsonConvert.SerializeObject(input));
        }

        //ES Docs reccomend the event type is stored in camel case for projections
        public string GetEventType()
        {
            return ConvertToCamelCase(typeof (T).Name);
        }
        protected string ConvertToCamelCase(string phrase)
        {
            string[] splittedPhrase = phrase.Split(' ', '-', '.');
            var sb = new StringBuilder();
            //sb.Append(splittedPhrase[0].ToLower());
            //splittedPhrase[0] = string.Empty;

            foreach (String s in splittedPhrase)
            {
                char[] splittedPhraseChars = s.ToCharArray();
                if (splittedPhraseChars.Length > 0)
                {
                    splittedPhraseChars[0] = ((new String(splittedPhraseChars[0], 1)).ToUpper().ToCharArray())[0];
                }
                sb.Append(new String(splittedPhraseChars));
            }
            return sb.ToString();
        }


    }
}
