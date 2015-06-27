namespace ReadWriteCommon.Publisher
{
    public class PublishResponse<T>
    {
        public T Payload { get; set; }
        public bool Success { get; set; }
    }
}