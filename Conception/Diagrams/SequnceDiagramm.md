```mermaid
sequenceDiagram
    participant Administrateur
    participant Utilisateur
    participant System as "Système de Gestion des Vols"
    participant Flight as "Vol"
    participant Passenger as "Passager"
    participant Reservation as "Réservation"

    Administrateur->>System: ajouterVol(vol)
    System->>Flight: création d'un vol
    System-->>Administrateur: confirmation de l'ajout

    Administrateur->>System: getVol(numVol)
    System->>Flight: renvoyer les détails du vol
    System-->>Administrateur: afficher les détails

    Administrateur->>System: mettreÀJourVol(vol)
    System->>Flight: mettre à jour les détails
    System-->>Administrateur: confirmation de la mise à jour

    Administrateur->>System: supprimerVol(numVol)
    System->>Flight: suppression du vol
    System-->>Administrateur: confirmation de la suppression

    Utilisateur->>System: ajouterPassager(passager)
    System->>Passenger: création d'un passager
    System-->>Utilisateur: confirmation de l'ajout

    Utilisateur->>System: getPassagers()
    System->>Passenger: renvoyer la liste des passagers
    System-->>Utilisateur: afficher les détails

    Utilisateur->>System: mettreÀJourPassager(passager)
    System->>Passenger: mettre à jour les détails
    System-->>Utilisateur: confirmation de la mise à jour

    Utilisateur->>System: supprimerPassager(numPasseport)
    System->>Passenger: suppression du passager
    System-->>Utilisateur: confirmation de la suppression

    Utilisateur->>System: ajouterRéservation(réservation)
    System->>Reservation: création d'une réservation
    System-->>Utilisateur: confirmation de l'ajout

    Utilisateur->>System: getRéservations()
    System->>Reservation: renvoyer la liste des réservations
    System-->>Utilisateur: afficher les détails

    Utilisateur->>System: mettreÀJourRéservation(réservation)
    System->>Reservation: mettre à jour les détails
    System-->>Utilisateur: confirmation de la mise à jour

    Utilisateur->>System: supprimerRéservation(idRéservation)
    System->>Reservation: suppression de la réservation
    System-->>Utilisateur: confirmation de la suppression

