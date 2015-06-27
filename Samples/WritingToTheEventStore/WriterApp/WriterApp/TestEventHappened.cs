using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ReadWriteCommon.Publisher;
namespace WriterApp
{
    public class TestEventHappened:PublishedEvent<TestEventHappened>
    {
        public string Message { get; set; }
    }
}
