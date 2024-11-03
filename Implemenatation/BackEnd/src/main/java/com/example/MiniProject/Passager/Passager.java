package com.example.MiniProject.Passager;

import com.example.MiniProject.User.User;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.Objects;
@Entity
@Data
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)

public class Passager extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_passager;

    private String PasseportNum;
    private String CIN;
    private Date dateNAissance;
    private String Nationalite;
    private String adresse;
    private Integer numTell;




    public Passager(Long id_passager ,String password, String email, String nomComplet,String PasseportNum,String CIN,Date dateNAissance,String Nationalite,String adresse,Integer numTell) {
        super(password, email, nomComplet);
        this.id_passager = id_passager;
        this.PasseportNum = PasseportNum;
        this.CIN = CIN;
        this.dateNAissance = dateNAissance;
        this.Nationalite = Nationalite;
        this.adresse = adresse;
        this.numTell = numTell;
    }

    public Passager() {
        super();
    }
}
