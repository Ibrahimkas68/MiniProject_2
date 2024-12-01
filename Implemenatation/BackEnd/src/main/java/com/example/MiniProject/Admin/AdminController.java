package com.example.MiniProject.Admin;

import org.hibernate.internal.build.AllowNonPortable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/admin")
public class AdminController {

    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }
    @GetMapping("/AllAdmins")
    public List<Admin> getAllAdmins() {
        return adminService.getAll();
    }
    @PutMapping("{AdminId}")
    public void updateAdmin(@PathVariable Long AdminId,
                             @RequestBody Admin admin,
                             @RequestBody(required = false) String password ,
                             @RequestBody(required = false) String email,
                             @RequestBody(required = false) String nom_complet){

        adminService.updateAdmin(AdminId,password,email,nom_complet);
    }
}
