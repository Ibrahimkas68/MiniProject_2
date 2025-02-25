package NewPackage.AdaptateurFormatsdeDonnées;

public class AdapterPatternDemo {
    public static void main(String[] args) {
        XmlFileReader xmlFileReader = new XmlFileReader();
        xmlFileReader.readXml("FileXml");
        JsonFileReader jsonFileReader = new JsonFileReader();
        AdapterJsonToXmlAdapter adapterJsonToXmlAdapter = new AdapterJsonToXmlAdapter(jsonFileReader);
        adapterJsonToXmlAdapter.readXml("FileXml");

    }

}
