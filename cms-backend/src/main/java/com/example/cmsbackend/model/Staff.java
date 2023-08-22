package com.example.cmsbackend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(unique = true)
    private String name;
    private String address;
}
