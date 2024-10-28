package com.example.MiniProject.Vol;

import com.example.MiniProject.Avion.Avion;
import com.example.MiniProject.Gesgtion;
import jakarta.persistence.*;

import java.util.Date;
import java.util.Objects;

@Entity
public class Vol implements Gesgtion{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_vol;

    private String codeIATA;
    private int numVol;
    private Date dateVol;
    private String IATADest;
    private String IATAOrig;

    @ManyToOne
    @JoinColumn(name = "id_avion", referencedColumnName = "id_avion")
    private Avion Avion;

    public Vol(Long id_vol, String codeIATA, int numVol, Date dateVol, String IATADest, String IATAOrig, com.example.MiniProject.Avion.Avion avion) {
        this.id_vol = id_vol;
        this.codeIATA = codeIATA;
        this.numVol = numVol;
        this.dateVol = dateVol;
        this.IATADest = IATADest;
        this.IATAOrig = IATAOrig;
        Avion = avion;
    }

    public Vol(String codeIATA, int numVol, Date dateVol, String IATADest, String IATAOrig, com.example.MiniProject.Avion.Avion avion) {
        this.codeIATA = codeIATA;
        this.numVol = numVol;
        this.dateVol = dateVol;
        this.IATADest = IATADest;
        this.IATAOrig = IATAOrig;
        Avion = avion;
    }

    public Vol() {
    }

    public Long getId_vol() {
        return id_vol;
    }

    public void setId_vol(Long id_vol) {
        this.id_vol = id_vol;
    }

    public String getCodeIATA() {
        return codeIATA;
    }

    public void setCodeIATA(String codeIATA) {
        this.codeIATA = codeIATA;
    }

    public int getNumVol() {
        return numVol;
    }

    public void setNumVol(int numVol) {
        this.numVol = numVol;
    }

    public Date getDateVol() {
        return dateVol;
    }

    public void setDateVol(Date dateVol) {
        this.dateVol = dateVol;
    }

    public String getIATADest() {
        return IATADest;
    }

    public void setIATADest(String IATADest) {
        this.IATADest = IATADest;
    }

    public String getIATAOrig() {
        return IATAOrig;
    }

    public void setIATAOrig(String IATAOrig) {
        this.IATAOrig = IATAOrig;
    }

    public com.example.MiniProject.Avion.Avion getAvion() {
        return Avion;
    }

    public void setAvion(com.example.MiniProject.Avion.Avion avion) {
        Avion = avion;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Vol vol = (Vol) o;
        return numVol == vol.numVol && Objects.equals(id_vol, vol.id_vol) && Objects.equals(codeIATA, vol.codeIATA) && Objects.equals(dateVol, vol.dateVol) && Objects.equals(IATADest, vol.IATADest) && Objects.equals(IATAOrig, vol.IATAOrig) && Objects.equals(Avion, vol.Avion);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id_vol, codeIATA, numVol, dateVol, IATADest, IATAOrig, Avion);
    }

    @Override
    public String toString() {
        return "Vol{" +
                "id_vol=" + id_vol +
                ", codeIATA='" + codeIATA + '\'' +
                ", numVol=" + numVol +
                ", dateVol=" + dateVol +
                ", IATADest='" + IATADest + '\'' +
                ", IATAOrig='" + IATAOrig + '\'' +
                ", Avion=" + Avion +
                '}';
    }

}
