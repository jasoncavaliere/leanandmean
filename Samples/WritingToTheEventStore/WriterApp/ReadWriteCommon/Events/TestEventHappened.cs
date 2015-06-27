using ReadWriteCommon.Publisher;
namespace ReadWriteCommon.Events
{
    public class TestEventHappened:PublishedEvent<TestEventHappened>
    {
        public string Message { get; set; }
    }
}
