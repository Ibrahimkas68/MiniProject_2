package com.example.MiniProject.Reservation;

import com.example.MiniProject.Passager.Passager;
import com.example.MiniProject.Vol.Vol;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;
@Entity
@Data
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_reservation;

    @ManyToOne
    @JoinColumn(name = "num_vol", referencedColumnName = "id_vol")
    private Vol numVol;

      private List<Passager> passagers;
      private Date DateReserv;
      private String Status;
      private Double Prix;



}
