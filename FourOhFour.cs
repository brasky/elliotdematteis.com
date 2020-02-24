namespace elliotdematteis.com
{
    public class FourOhFour
    {
        public string SearchEndpoint = "http://api.giphy.com/v1/gifs/random?tag=";

        public string APIKey = System.Environment.GetEnvironmentVariable("GIPHY_KEY");

        public string GifUrl { get; set; }

        public string SearchText { get; set; }
        
        
    }
}