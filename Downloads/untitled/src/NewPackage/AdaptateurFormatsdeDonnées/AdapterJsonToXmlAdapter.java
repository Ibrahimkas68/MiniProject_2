package NewPackage.AdaptateurFormatsdeDonnées;

public class AdapterJsonToXmlAdapter implements XmlReader {
    private final JsonFileReader jsonFileReader;

    public AdapterJsonToXmlAdapter(JsonFileReader jsonFileReader) {
        this.jsonFileReader = jsonFileReader;
    }

    @Override
    public void readXml(String fileName){
        jsonFileReader.readJson(fileName);
    }


}
