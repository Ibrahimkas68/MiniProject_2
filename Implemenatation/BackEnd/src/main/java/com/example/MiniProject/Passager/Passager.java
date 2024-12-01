package com.example.MiniProject.Passager;

import com.example.MiniProject.User.UserEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name = "passager")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Passager extends UserEntity {
    @Id
    @SequenceGenerator(
            name = "Passager_sequence",
            sequenceName = "Passager_sequence",
            allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
            generator = "Passager_sequence")    private String PasseportNum;
    private String CIN;
    private Date dateNAissance;
    private String Nationalite;
    private String adresse;
    private Integer numTell;

    public Passager(Long id, String password, String email, String nomComplet, String passeportNum, String CIN, Date dateNAissance, String nationalite, String adresse, Integer numTell) {
        super(id, password, email, nomComplet);
        PasseportNum = passeportNum;
        this.CIN = CIN;
        this.dateNAissance = dateNAissance;
        Nationalite = nationalite;
        this.adresse = adresse;
        this.numTell = numTell;
    }

    public Passager(String password, String email, String nomComplet, String passeportNum, String CIN, Date dateNAissance, String nationalite, String adresse, Integer numTell) {
        super(password, email, nomComplet);
        PasseportNum = passeportNum;
        this.CIN = CIN;
        this.dateNAissance = dateNAissance;
        Nationalite = nationalite;
        this.adresse = adresse;
        this.numTell = numTell;
    }

    public Passager() {
    }
}
