package com.example.MiniProject.Admin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdminDTO {
    private Long id;
    private String email;
    private String nomComplet;
    private String password; // Include password for secure transfer (if required for creation or updates)
}