
import{environment} from'../../../src/environments/environment';
export class Endpoint{

    // public static API_HOME = "http://dev.localinfoz.com/api/";
    public static CATEGORIES = environment.API_HOME+"categories/1";
    public static SUBCATEGORIES = environment.API_HOME+"subcategories/1";
    public static BUSSINESSLISTG = environment.API_HOME+"listings/1";
    public static SIGLEBUSSINESS =  environment.API_HOME+"single";
}