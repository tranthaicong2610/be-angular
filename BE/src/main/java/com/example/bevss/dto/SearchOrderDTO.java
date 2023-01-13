package com.example.bevss.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SearchOrderDTO {

    private Long orderId;
    private String name;
    private String phone;

}
