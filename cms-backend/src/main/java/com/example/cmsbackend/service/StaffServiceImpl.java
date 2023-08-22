package com.example.cmsbackend.service;

import com.example.cmsbackend.model.Staff;
import com.example.cmsbackend.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffServiceImpl  implements StaffService {
    @Autowired
    private StaffRepository staffRepository;

    @Override
    public List<Staff> getAllStaff() {
        return staffRepository.findAll();
    }

    @Override
    public Staff saveStaff(Staff staff){
        return staffRepository.save(staff);
    }


}
