using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HelloWorldController : ControllerBase
    {
        
        private readonly ILogger<HelloWorldController> _logger;

        public HelloWorldController(ILogger<HelloWorldController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "HelloWorld")]
        public String Get()
        {
            return "Bu Mesaj API'den Gelmektedir.";
        }
    }
}
