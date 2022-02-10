package com.gx.htgl.controller;


import com.gx.htgl.base.ResponseData;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class HomeController {

	@GetMapping("/loadData")
	public ResponseData loadData() {
		return ResponseData.ok("hello");
	}
	
}
