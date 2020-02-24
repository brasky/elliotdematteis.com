namespace elliotdematteis.com
{
    public class FourOhFour
    {
        public string SearchEndpoint = "http://api.giphy.com/v1/gifs/random?tag=";

        public string APIKey = System.Environment.GetEnvironmentVariable("GIPHYKEY");

        public string GifUrl { get; set; }

        public string SearchText { get; set; }
        
        
    }
}