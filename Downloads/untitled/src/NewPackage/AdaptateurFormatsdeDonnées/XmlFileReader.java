package NewPackage.AdaptateurFormatsdeDonnées;

public class XmlFileReader implements XmlReader{
    @Override
    public void readXml(String fileName){
        System.out.println("Reading data from XML file: " + fileName);
    }


}
