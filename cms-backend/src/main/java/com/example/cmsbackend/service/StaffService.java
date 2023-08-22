package com.example.cmsbackend.service;

import com.example.cmsbackend.model.Staff;

import java.util.List;

public interface StaffService {
    public Staff saveStaff(Staff staff);
    public List<Staff> getAllStaff();

}
