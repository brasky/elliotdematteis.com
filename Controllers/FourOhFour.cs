using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using Newtonsoft.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace elliotdematteis.com.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FourOhFourController : ControllerBase
    {
        public FourOhFour Get()
        {
            var fof = new FourOhFour();
            fof.SearchText = "Oops";
            var searchUrl = CreateSearchUrl(fof);
            fof.GifUrl = SearchAsync(searchUrl).Result;

            
            return fof;
        }

        private string CreateSearchUrl(FourOhFour fof)
        {
            return fof.SearchEndpoint + Uri.EscapeDataString(fof.SearchText) + "&" + fof.APIKey;
        }

        private async Task<string> SearchAsync(string searchUrl)
        {
            using (var httpClient = new HttpClient())
            {
                try
                {
                    var response = await httpClient.GetAsync(searchUrl);
                    response.EnsureSuccessStatusCode();
                    var responseContent = await response.Content.ReadAsStringAsync();
                    responseContent = Uri.UnescapeDataString(responseContent);
                    Newtonsoft.Json.Linq.JObject jsonData = (Newtonsoft.Json.Linq.JObject)JsonConvert.DeserializeObject(responseContent);


                    return jsonData["data"]["images"]["original"].Value<string>("url");

                }
                catch (Exception ex)
                {
                    return "";
                }
            }
        }
    }

}