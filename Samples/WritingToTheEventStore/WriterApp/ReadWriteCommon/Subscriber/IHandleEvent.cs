namespace ReadWriteCommon.Subscriber
{
    public interface IHandleEvent<in T>
    {
        EventHandlerResult Handle(T input);
    }
}