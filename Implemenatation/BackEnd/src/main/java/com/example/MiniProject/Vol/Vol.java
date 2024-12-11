package com.example.MiniProject.Vol;

import com.example.MiniProject.Avion.Avion;
import com.example.MiniProject.Reservation.Reservation;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name = "vol")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Vol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_vol;
    private String codeIATA;
    private int numVol;
    private Date dateVol;
    private String IATADest;
    private String IATAOrig;
    @Column(name = "price")
    private BigDecimal price;


    @ManyToOne
    @JoinColumn(name = "id_avion", referencedColumnName = "id_avion")
    private Avion avion;
    @OneToMany(mappedBy = "numVol", cascade = CascadeType.ALL)
    private List<Reservation> reservations;

    public Vol(Long id_vol, String codeIATA, int numVol, Date dateVol, String IATADest, String IATAOrig, BigDecimal price, Avion avion, List<Reservation> reservations) {
        this.id_vol = id_vol;
        this.codeIATA = codeIATA;
        this.numVol = numVol;
        this.dateVol = dateVol;
        this.IATADest = IATADest;
        this.IATAOrig = IATAOrig;
        this.price = price;
        this.avion = avion;
        this.reservations = reservations;
    }

    public Vol(String codeIATA, int numVol, Date dateVol, String IATADest, String IATAOrig, BigDecimal price,Avion avion, List<Reservation> reservations) {
        this.codeIATA = codeIATA;
        this.numVol = numVol;
        this.dateVol = dateVol;
        this.IATADest = IATADest;
        this.IATAOrig = IATAOrig;
        this.price = price;
        this.avion = avion;
        this.reservations = reservations;
    }

    public Vol() {
    }
}
