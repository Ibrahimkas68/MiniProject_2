package com.example.MiniProject.Passager;

import com.example.MiniProject.Reservation.Reservation;
import com.example.MiniProject.User.Role;
import com.example.MiniProject.User.UserEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

@Entity
@Data
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@EqualsAndHashCode(callSuper = true)
public class Passager extends UserEntity {
    private String PasseportNum;
    private String CIN;
    private Date dateNAissance;
    private String Nationalite;
    private String adresse;
    private Integer numTell;
    @ManyToOne
    @JoinColumn(name = "reservation_id", referencedColumnName = "id_reservation")
    private Reservation reservation;


    public Passager(Long id, String password, String email, String nom_complet, String passeportNum, String CIN, Date dateNAissance, String nationalite, String adresse, Integer numTell, Reservation reservation) {
        super(id, Role.PASSAGER, password, email, nom_complet);
        PasseportNum = passeportNum;
        this.CIN = CIN;
        this.dateNAissance = dateNAissance;
        Nationalite = nationalite;
        this.adresse = adresse;
        this.numTell = numTell;
        this.reservation = reservation;
    }

    public Passager( String password, String email, String nom_complet, String passeportNum, String CIN, Date dateNAissance, String nationalite, String adresse, Integer numTell, Reservation reservation) {
        super(Role.PASSAGER, password, email, nom_complet);
        PasseportNum = passeportNum;
        this.CIN = CIN;
        this.dateNAissance = dateNAissance;
        Nationalite = nationalite;
        this.adresse = adresse;
        this.numTell = numTell;
        this.reservation = reservation;
    }

    public Passager() {
    }
}
