package com.example.MiniProject.Passager;

import com.example.MiniProject.User.User;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;
import java.util.Objects;

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

    public Long getId_passager() {
        return id_passager;
    }

    public void setId_passager(Long id_passager) {
        this.id_passager = id_passager;
    }

    public String getPasseportNum() {
        return PasseportNum;
    }

    public void setPasseportNum(String passeportNum) {
        PasseportNum = passeportNum;
    }

    public String getCIN() {
        return CIN;
    }

    public void setCIN(String CIN) {
        this.CIN = CIN;
    }

    public Date getDateNAissance() {
        return dateNAissance;
    }

    public void setDateNAissance(Date dateNAissance) {
        this.dateNAissance = dateNAissance;
    }

    public String getNationalite() {
        return Nationalite;
    }

    public void setNationalite(String nationalite) {
        Nationalite = nationalite;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public Integer getNumTell() {
        return numTell;
    }

    public void setNumTell(Integer numTell) {
        this.numTell = numTell;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Passager passager = (Passager) o;
        return Objects.equals(id_passager, passager.id_passager) && Objects.equals(PasseportNum, passager.PasseportNum) && Objects.equals(CIN, passager.CIN) && Objects.equals(dateNAissance, passager.dateNAissance) && Objects.equals(Nationalite, passager.Nationalite) && Objects.equals(adresse, passager.adresse) && Objects.equals(numTell, passager.numTell);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), id_passager, PasseportNum, CIN, dateNAissance, Nationalite, adresse, numTell);
    }

    @Override
    public String toString() {
        return "Passager{" +
                "id_passager=" + id_passager +
                ", PasseportNum='" + PasseportNum + '\'' +
                ", CIN='" + CIN + '\'' +
                ", dateNAissance=" + dateNAissance +
                ", Nationalite='" + Nationalite + '\'' +
                ", adresse='" + adresse + '\'' +
                ", numTell=" + numTell +
                '}';
    }
}
