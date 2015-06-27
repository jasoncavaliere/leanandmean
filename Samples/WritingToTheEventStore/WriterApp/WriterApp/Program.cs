using ReadWriteCommon.Publisher;
namespace WriterApp
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            var testEventHappened = new TestEventHappened
            {
                Message = "Hello Eventing World!"
            };
            var eventPublisher = new EventPublisher<TestEventHappened>();
        
            eventPublisher.Publish<object>(testEventHappened);
        }
    }
}