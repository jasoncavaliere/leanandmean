using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WriterApp.Publisher;
namespace WriterApp
{
    public class TestEventHappened:PublishedEvent<TestEventHappened>
    {
        public string Message { get; set; }
    }
}
