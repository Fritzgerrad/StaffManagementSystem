package com.example.cmsbackend.controller;

import com.example.cmsbackend.model.Staff;
import com.example.cmsbackend.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/staff")
@CrossOrigin
public class StaffController {
    @Autowired
    private StaffService staffService;

    @PostMapping("/add")
    public String add(@RequestBody Staff staff){
        staffService.saveStaff(staff);
        return "New Staff has been added";
    }

    @GetMapping("/getAll")
    public List<Staff> getAllStaff(){
        return staffService.getAllStaff();
    }


}
