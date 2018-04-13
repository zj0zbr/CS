package domain.Magazine;

import domain.Weapon.Weapon;

import java.util.ArrayList;
import java.util.Iterator;

public class Magazine {
    private ArrayList weapens;
    private Iterator iterator;

    public Magazine(){
        weapens=new ArrayList();
        iterator=weapens.iterator();
    }

    public void display(){
        while (iterator.hasNext()){
            ((Weapon)iterator.next()).display();
        }
    }




}
