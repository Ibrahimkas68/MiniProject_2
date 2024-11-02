```mermaid
classDiagram

    %% Relationships
    Vol "1..*" --> "1" Avion : "utilise"
    Avion "1" --> "1..*" Vol : "associé"
    Reservation "1" --> "1..*" Passager : "réservée par"
    Vol --* "1..*" Equipage : "a un équipage"
    Vol --> "1" Aeroport : "origine/destination"
    Reservation --> "1" Vol : "réserve"

    %% Interface
    class Gestion {
        <<interface>>
        +ajouter()
        +recupere()
        +MAJ()
        +supprimer()
    }

    %% Classes and fields
    class Vol {
        -Long id_vol
        -String codeIata
        -int numVol
        -Date dateVol
        -String iataDest
        -String iataOrig
    }

    class Avion {
        -Long id_avion
        -String avionType
        -int capacite
        -int anneeFabrication
        -String modele
    }

    class Passager {
        -Long id_passager
        -String passportNum
        -String CIN
        -Date dateNaissance
        -String nationalite
        -String adresse
        -int tel
    }

    class Reservation {
        -Long id_reservation
        -int numVol
        -List~Passager~ passagers
        -Date dateReserv
        -String status
        -double prix
    }

    class Equipage {
        -Long id_equipage
        -String fonction
        -int numLic
        -String nationalite
    }

    class Aeroport {
        -Long id_aeroport
        -int iataAero
        -String nom
        -String ville
        -String pays
        -int capaciteTrait
    }

    %% Interface implementation relationships
    Vol ..|> Gestion
    Avion ..|> Gestion
    Passager ..|> Gestion
    Reservation ..|> Gestion
    Equipage ..|> Gestion
    Aeroport ..|> Gestion

    %% User hierarchy
    class User {
        -Long id
        -String email
        -String password
        -String nom_complet
    }

    class Admin {
        -Long id_admin
        +ajouter_membre()
        +supprimer_membre()
        +recuperer_membre()
        +mettre_a_jour_membre()
        +ajouter_avion()
        +supprimer_avion()
        +recuperer_avion()
        +mettre_a_jour_avion()
        +ajouter_vol()
        +supprimer_vol()
        +recuperer_vol()
        +mettre_a_jour_vol()
        +ajouter_aeroport()
        +supprimer_aeroport()
        +recuperer_aeroport()
        +mettre_a_jour_aeroport()
    }

    %% Inheritance relationships
    User <|-- Admin
    User <|-- Passager
    User <|-- Equipage
    ```

