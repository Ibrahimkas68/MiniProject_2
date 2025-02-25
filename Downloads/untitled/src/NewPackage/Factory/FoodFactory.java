package NewPackage.Factory;

public class FoodFactory {
    public Food getFood(String foodType){
        if(foodType.equalsIgnoreCase("Burger")){
            return new Burger();
        } else if (foodType.equalsIgnoreCase("Sandwich")) {
            return new Sandwich();
        }
        else return null;
    }

}
