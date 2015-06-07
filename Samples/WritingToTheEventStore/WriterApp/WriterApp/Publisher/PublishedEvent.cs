namespace WriterApp.Publisher
{

    public abstract class PublishedEvent<T>
    {
        public virtual string GetStreamName()
        {
            return typeof(T).Name;
        }
    }
}