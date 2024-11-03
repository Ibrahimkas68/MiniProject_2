package com.example.MiniProject.Vol;

import com.example.MiniProject.Avion.Avion;
import com.example.MiniProject.Gestion;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.Objects;

@Entity
@Data
public class Vol implements Gestion{
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


}
