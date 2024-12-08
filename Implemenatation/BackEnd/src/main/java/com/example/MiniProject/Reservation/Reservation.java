package com.example.MiniProject.Reservation;

import com.example.MiniProject.Passager.Passager;
import com.example.MiniProject.Vol.Vol;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;
@Entity
@Table(name = "reservation")
@Data
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_reservation;

    @ManyToOne
    @JoinColumn(name = "num_vol", referencedColumnName = "id_vol")
    private Vol numVol;  // Assuming a `Vol` entity exists and is linked here.

    @OneToMany(mappedBy = "reservation")
    private List<Passager> passagers; // One-to-Many relationship with Passager.

    private Date dateReserv;
    private String status;
    private Double prix;

    public Reservation(Long id_reservation, Vol numVol, List<Passager> passagers, Date dateReserv, String status, Double prix) {
        this.id_reservation = id_reservation;
        this.numVol = numVol;
        this.passagers = passagers;
        this.dateReserv = dateReserv;
        this.status = status;
        this.prix = prix;
    }

    public Reservation(Vol numVol, List<Passager> passagers, Date dateReserv, String status, Double prix) {
        this.numVol = numVol;
        this.passagers = passagers;
        this.dateReserv = dateReserv;
        this.status = status;
        this.prix = prix;
    }

    public Reservation() {
    }

}
