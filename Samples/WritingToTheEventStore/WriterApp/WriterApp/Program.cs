using WriterApp.Publisher;
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
            new EventPublisher<TestEventHappened>().Publish<object>(testEventHappened);
        }
    }
}