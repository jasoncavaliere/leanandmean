using System;
using ReadWriteCommon.Events;
using ReadWriteCommon.Subscriber;
namespace ReaderApp
{
    public class Program
    {
        private static void Main(string[] args)
        {
            new TestEventHapenedOrderedStreamHandler(new TestEventHapenedHandler()).ReadStream();
        }
    }
    public class TestEventHapenedOrderedStreamHandler : OrderedStreamHandler<TestEventHappened>
    {
        public TestEventHapenedOrderedStreamHandler(IHandleEvent<TestEventHappened> handleOrderCreated)
            : base(handleOrderCreated)
        {
        }
    }

    public class TestEventHapenedHandler : IHandleEvent<TestEventHappened>
    {
        public EventHandlerResult Handle(TestEventHappened input)
        {
            Console.WriteLine("Mesage recieved : {0}",input.Message);
            return new EventHandlerResult();
        }
    }
}