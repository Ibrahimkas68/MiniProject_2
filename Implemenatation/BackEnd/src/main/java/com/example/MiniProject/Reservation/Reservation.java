package com.example.MiniProject.Reservation;

import com.example.MiniProject.Passager.Passager;
import com.example.MiniProject.Vol.Vol;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "reservation")
@Data
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_reservation;

    @ManyToOne
    @JoinColumn(name = "num_vol", referencedColumnName = "id_vol")
    private Vol numVol;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "passager_id", referencedColumnName = "id")
    private Passager passager;

    private Date dateReserv;
    private String status;
    private Double prix;

    public Reservation(Long id_reservation, Vol numVol, Passager passager, Date dateReserv, String status, Double prix) {
        this.id_reservation = id_reservation;
        this.numVol = numVol;
        this.passager = passager;
        this.dateReserv = dateReserv;
        this.status = status;
        this.prix = prix;
    }

    public Reservation(Vol numVol, Passager passager, Date dateReserv, String status, Double prix) {
        this.numVol = numVol;
        this.passager = passager;
        this.dateReserv = dateReserv;
        this.status = status;
        this.prix = prix;
    }

    public Reservation() {
    }
}