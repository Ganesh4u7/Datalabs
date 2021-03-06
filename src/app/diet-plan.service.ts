import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DietPlanService {
  userCredentials: any ={};
  savedPlansArray :any = [];
  savedPlansTotals: any = [];
  savedPlansNametags: any = [];


  savedWorkoutPlansArray :any = [];
  savedWorkoutPlansTotals: any = [];
  savedWorkoutPlansNametags: any = [];
  publishedPlans:any = [];
  plansIds:any =[];
  workoutPlansIds:any =[];
  token:any = null;
  secretKey=null;
  vegetables: any= [
    {"index":0,"name":"Ivy Gourd","kcal":0.18,"protein":0.012,"carbs":0.031,"fat":0.001,"sfat":0,"DFib":0,"sugar":0,"sodium":0,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":1,"name":"Tomato","kcal":0.25,"protein":0.015,"carbs":0.06,"fat":0.005,"sfat":0,"DFib":0.018,"sugar":0.04,"sodium":0.075,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":2,"name":"Ridge Gourd","kcal":0.62,"protein":0.007,"carbs":0.14,"fat":0.003,"sfat":0,"DFib":0,"sugar":0.05,"sodium":0.21,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":3,"name":"Potato","kcal":0.68,"protein":0.02,"carbs":0.17,"fat":0.001,"sfat":0,"DFib":0.022,"sugar":0.008,"sodium":0.06,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":4,"name":"Bitter Gourd","kcal":0.44,"protein":0.036,"carbs":0.07,"fat":0.002,"sfat":0,"DFib":0,"sugar":0.01,"sodium":0.13,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":5,"name":"Snake Gourd","kcal":0.16,"protein":0.01,"carbs":0.03,"fat":0,"sfat":0,"DFib":0,"sugar":0,"sodium":0.08,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":6,"name":"Bottle Gourd","kcal":0.16,"protein":0.006,"carbs":0.034,"fat":0,"sfat":0,"DFib":0,"sugar":0,"sodium":0.02,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":7,"name":"Broad Beans","kcal":0.56,"protein":0.03,"carbs":0.11,"fat":0,"sfat":0,"DFib":0,"sugar":0,"sodium":0,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":8,"name":"Cucumber","kcal":0.18,"protein":0.007,"carbs":0.036,"fat":0.001,"sfat":0,"DFib":0.005,"sugar":0.017,"sodium":0.02,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":9,"name":"Radish","kcal":0.17,"protein":0.007,"carbs":0.034,"fat":0.001,"sfat":0,"DFib":0.016,"sugar":0.019,"sodium":0.39,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":10,"name":"Taro Root","kcal":1.12,"protein":0.015,"carbs":0.26,"fat":0.002,"sfat":0,"DFib":0,"sugar":0.004,"sodium":0.11,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":11,"name":"Lettuce","kcal":0.3,"protein":0.029,"carbs":0.036,"fat":0.004,"sfat":0.001,"DFib":0,"sugar":0.004,"sodium":0.79,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":12,"name":"Amaranth Leaves","kcal":0.29,"protein":0.025,"carbs":0.04,"fat":0.003,"sfat":0.001,"DFib":0,"sugar":0,"sodium":0.2,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":13,"name":"Mesta Leaves","kcal":0.27,"protein":0.02,"carbs":0.032,"fat":0.007,"sfat":0,"DFib":0,"sugar":0,"sodium":0.04,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":14,"name":"Carrot","kcal":0.34,"protein":0.009,"carbs":0.1,"fat":0.002,"sfat":0,"DFib":0.028,"sugar":0.047,"sodium":0.69,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":15,"name":"Cabbage","kcal":0.2,"protein":0.013,"carbs":0.06,"fat":0.001,"sfat":0,"DFib":0.025,"sugar":0.032,"sodium":0.18,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":16,"name":"Onion","kcal":0.3666667,"protein":0.01,"carbs":0.09,"fat":0,"sfat":0,"DFib":0.016667,"sugar":0.04,"sodium":0.04,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":17,"name":"Cauliflower","kcal":0.22,"protein":0.019,"carbs":0.05,"fat":0.003,"sfat":0.001,"DFib":0.02,"sugar":0.019,"sodium":0.3,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":18,"name":"Capsicum","kcal":0.178,"protein":0.009,"carbs":0.046,"fat":0.002,"sfat":0.001,"DFib":0.015,"sugar":0.024,"sodium":0.03,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":19,"name":"Lady Fingers","kcal":0.25,"protein":0.019,"carbs":0.07,"fat":0.002,"sfat":0,"DFib":0.032,"sugar":0.015,"sodium":0.07,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'}

  ];
  fruits: any = [
    {"index":0,"name":"Apple","kcal":0.5,"protein":0.003,"carbs":0.14,"fat":0.002,"sfat":0,"DFib":0.024,"sugar":0.1,"sodium":0.01,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":1,"name":"Banana","kcal":0.89,"protein":0.011,"carbs":0.23,"fat":0.003,"sfat":0.001,"DFib":0.026,"sugar":0.12,"sodium":0.01,"sWeight":100,"click":0,"fruits":'vegetables',"weight":1,"metric":'g'},
    {"index":2,"name":"Orange","kcal":0.43,"protein":0.009,"carbs":0.12,"fat":0.001,"sfat":0,"DFib":0.024,"sugar":0.12,"sodium":0,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":3,"name":"Mango","kcal":0.6,"protein":0.008,"carbs":0.15,"fat":0.004,"sfat":0.001,"DFib":0.016,"sugar":0.14,"sodium":0.01,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":4,"name":"Guava","kcal":0.56,"protein":0.026,"carbs":0.14,"fat":0.01,"sfat":0.003,"DFib":0.05,"sugar":0.09,"sodium":0.02,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":5,"name":"Promogranate","kcal":0.78,"protein":0.017,"carbs":0.19,"fat":0.012,"sfat":0.001,"DFib":0.04,"sugar":0.14,"sodium":0.03,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":6,"name":"Muskmeleon","kcal":0.33,"protein":0.008,"carbs":0.08,"fat":0.002,"sfat":0.001,"DFib":0.009,"sugar":0.08,"sodium":0.16,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":7,"name":"Pineapple","kcal":0.49,"protein":0.005,"carbs":0.13,"fat":0.001,"sfat":0,"DFib":0.014,"sugar":0.1,"sodium":0.01,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":8,"name":"Papaya","kcal":0.42,"protein":0.005,"carbs":0.11,"fat":0.003,"sfat":0.001,"DFib":0.017,"sugar":0.08,"sodium":0.08,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":9,"name":"Watermeleon","kcal":0.35,"protein":0.006,"carbs":0.08,"fat":0.002,"sfat":0,"DFib":0.004,"sugar":0.06,"sodium":0.02,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":10,"name":"Lemon","kcal":0.32,"protein":0.011,"carbs":0.09,"fat":0.003,"sfat":0,"DFib":0.028,"sugar":0.025,"sodium":0.02,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":11,"name":"Grapes","kcal":0.71,"protein":0.006,"carbs":0.17,"fat":0.004,"sfat":0.001,"DFib":0.009,"sugar":0.16,"sodium":0.02,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'}
  ];
  nuts:any = [
    {"index":0,"name":"Cashew Nut","kcal":5.75,"protein":0.18,"carbs":0.3,"fat":0.44,"sfat":0.08,"DFib":0.033,"sugar":0.06,"sodium":0.12,"sWeight":100,"click":0,"itemType":'nuts',"weight":1,"metric":'g'},
    {"index":1,"name":"Almond","kcal":5.667,"protein":0.21,"carbs":0.22,"fat":0.49,"sfat":0.03,"DFib":0.12,"sugar":0.038333,"sodium":0.0166667,"sWeight":100,"click":0,"itemType":'nuts',"weight":1,"metric":'g'},
    {"index":2,"name":"Pista","kcal":5.57,"protein":0.2,"carbs":0.28,"fat":0.45,"sfat":0.06,"DFib":0.1,"sugar":0.08,"sodium":0.01,"sWeight":100,"click":0,"itemType":'nuts',"weight":1,"metric":'g'},
    {"index":3,"name":"Walnut","kcal":6.73,"protein":0.15,"carbs":0.14,"fat":0.65,"sfat":0.06,"DFib":0.07,"sugar":0.026,"sodium":0.02,"sWeight":100,"click":0,"itemType":'nuts',"weight":1,"metric":'g'},
    {"index":4,"name":"Peanut","kcal":6.02,"protein":0.24,"carbs":0.22,"fat":0.5,"sfat":0.07,"DFib":0.08,"sugar":0.042,"sodium":0.06,"sWeight":100,"click":0,"itemType":'nuts',"weight":1,"metric":'g'}
  ];
  liquids:any =[

  ];
  seeds:any = [
    {"index":0,"name":"Fenugreek Seeds","kcal":2.78,"protein":0.23,"carbs":0.58,"fat":0.06,"sfat":0.015,"DFib":0.25,"sugar":0,"sodium":0.67,"sWeight":100,"click":0,"itemType":'seeds',"weight":1,"metric":'g'},
    {"index":1,"name":"Poppy Seeds(","kcal":4.82,"protein":0.18,"carbs":0.28,"fat":0.42,"sfat":0.045,"DFib":0.2,"sugar":0.03,"sodium":0.26,"sWeight":100,"click":0,"itemType":'seeds',"weight":1,"metric":'g'},
    {"index":2,"name":"Cumin Seeds","kcal":4,"protein":0.18,"carbs":0.44,"fat":0.22,"sfat":0.015,"DFib":0.11,"sugar":0.023,"sodium":1.68,"sWeight":100,"click":0,"itemType":'seeds',"weight":1,"metric":'g'},
    {"index":3,"name":"Sesame Seeds","kcal":5.66,"protein":0.18,"carbs":0.23,"fat":0.5,"sfat":0.07,"DFib":0.12,"sugar":0.003,"sodium":0.11,"sWeight":100,"click":0,"itemType":'seeds',"weight":1,"metric":'g'},
    {"index":4,"name":"Tur Dal","kcal":3.3,"protein":0.22,"carbs":0.54,"fat":0.02,"sfat":0,"DFib":0.02,"sugar":0,"sodium":0,"sWeight":100,"click":0,"itemType":'seeds',"weight":1,"metric":'g'},
    {"index":5,"name":"Urad Dal","kcal":2.82,"protein":0.25,"carbs":0.59,"fat":0.016,"sfat":0.001,"DFib":0.18,"sugar":0,"sodium":0.38,"sWeight":100,"click":0,"itemType":'seeds',"weight":1,"metric":'g'},
    {"index":6,"name":"Mung Bean","kcal":2.95,"protein":0.24,"carbs":0.63,"fat":0.012,"sfat":0.003,"DFib":0.16,"sugar":0.07,"sodium":0.15,"sWeight":100,"click":0,"itemType":'seeds',"weight":1,"metric":'g'},
    {"index":7,"name":"Mustard Seeds","kcal":4.9,"protein":0.26,"carbs":0.28,"fat":0.36,"sfat":0.02,"DFib":0.12,"sugar":0.07,"sodium":0.13,"sWeight":100,"click":0,"itemType":'seeds',"weight":1,"metric":'g'}
  ];
  others:any =[
    {"index":0,"name":"Rice","kcal":3.4933,"protein":0.07,"carbs":0.8,"fat":0.006667,"sfat":0.001333,"DFib":0.0133,"sugar":0.001333,"sodium":0.05,"sWeight":100,"click":0,"itemType":'others',"weight":1,"metric":'g'},
    {"index":1,"name":"Brown Rice(","kcal":3.52,"protein":0.08,"carbs":0.77,"fat":0.029,"sfat":0.006,"DFib":0.035,"sugar":0.009,"sodium":0.07,"sWeight":100,"click":0,"itemType":'others',"weight":1,"metric":'g'},
    {"index":2,"name":"Salt","kcal":0,"protein":0,"carbs":0,"fat":0,"sfat":0,"DFib":0,"sugar":0,"sodium":387,"sWeight":100,"click":0,"itemType":'others',"weight":1,"metric":'g'},
    {"index":3,"name":"Chilli Powder(","kcal":0,"protein":0.13,"carbs":0.5,"fat":0.14,"sfat":0.025,"DFib":0,"sugar":0.07,"sodium":16.4,"sWeight":100,"click":0,"itemType":'others',"weight":1,"metric":'g'},
    {"index":4,"name":"Turmeric ","kcal":0,"protein":0.08,"carbs":0.65,"fat":0.1,"sfat":0.031,"DFib":0.21,"sugar":0.032,"sodium":0.38,"sWeight":100,"click":0,"itemType":'others',"weight":1,"metric":'g'},
    {"index":5,"name":"Ginger","kcal":0.78,"protein":0.018,"carbs":0.18,"fat":0.008,"sfat":0.002,"DFib":0.02,"sugar":0.017,"sodium":0.13,"sWeight":100,"click":0,"itemType":'others',"weight":1,"metric":'g'},
    {"index":6,"name":"Garlic","kcal":1.52,"protein":0.06,"carbs":0.33,"fat":0.005,"sfat":0.001,"DFib":0.021,"sugar":0.01,"sodium":0.17,"sWeight":100,"click":0,"itemType":'others',"weight":1,"metric":'g'},
    {"index":7,"name":"Sugar","kcal":4,"protein":0,"carbs":1,"fat":0,"sfat":0,"DFib":0,"sugar":1,"sodium":0,"sWeight":100,"click":0,"itemType":'others',"weight":1,"metric":'g'}
  ];


  vegetables1: any= [{"index":0,"name":"Lady Fingers","kcal":0.25,"protein":0.019,"carbs":0.07,"fat":0.002,"sfat":0,"DFib":0.032,"sugar":0.015,"sodium":0.07,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":0,"name":"Ivy Gourd","kcal":0.18,"protein":0.012,"carbs":0.031,"fat":0.001,"sfat":0,"DFib":0,"sugar":0,"sodium":0,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":1,"name":"Tomato","kcal":0.25,"protein":0.015,"carbs":0.06,"fat":0.005,"sfat":0,"DFib":0.018,"sugar":0.04,"sodium":0.075,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":2,"name":"Ridge Gourd","kcal":0.62,"protein":0.007,"carbs":0.14,"fat":0.003,"sfat":0,"DFib":0,"sugar":0.05,"sodium":0.21,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":3,"name":"Potato","kcal":0.68,"protein":0.02,"carbs":0.17,"fat":0.001,"sfat":0,"DFib":0.022,"sugar":0.008,"sodium":0.06,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":4,"name":"Bitter Gourd","kcal":0.44,"protein":0.036,"carbs":0.07,"fat":0.002,"sfat":0,"DFib":0,"sugar":0.01,"sodium":0.13,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":5,"name":"Snake Gourd","kcal":0.16,"protein":0.01,"carbs":0.03,"fat":0,"sfat":0,"DFib":0,"sugar":0,"sodium":0.08,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":6,"name":"Bottle Gourd","kcal":0.16,"protein":0.006,"carbs":0.034,"fat":0,"sfat":0,"DFib":0,"sugar":0,"sodium":0.02,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":7,"name":"Broad Beans","kcal":0.56,"protein":0.03,"carbs":0.11,"fat":0,"sfat":0,"DFib":0,"sugar":0,"sodium":0,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":8,"name":"Cucumber","kcal":0.18,"protein":0.007,"carbs":0.036,"fat":0.001,"sfat":0,"DFib":0.005,"sugar":0.017,"sodium":0.02,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":9,"name":"Radish","kcal":0.17,"protein":0.007,"carbs":0.034,"fat":0.001,"sfat":0,"DFib":0.016,"sugar":0.019,"sodium":0.39,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":10,"name":"Taro Root","kcal":1.12,"protein":0.015,"carbs":0.26,"fat":0.002,"sfat":0,"DFib":0,"sugar":0.004,"sodium":0.11,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":11,"name":"Lettuce","kcal":0.3,"protein":0.029,"carbs":0.036,"fat":0.004,"sfat":0.001,"DFib":0,"sugar":0.004,"sodium":0.79,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":12,"name":"Amaranth Leaves","kcal":0.29,"protein":0.025,"carbs":0.04,"fat":0.003,"sfat":0.001,"DFib":0,"sugar":0,"sodium":0.2,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":13,"name":"Mesta Leaves","kcal":0.27,"protein":0.02,"carbs":0.032,"fat":0.007,"sfat":0,"DFib":0,"sugar":0,"sodium":0.04,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":14,"name":"Carrot","kcal":0.34,"protein":0.009,"carbs":0.1,"fat":0.002,"sfat":0,"DFib":0.028,"sugar":0.047,"sodium":0.69,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":15,"name":"Cabbage","kcal":0.2,"protein":0.013,"carbs":0.06,"fat":0.001,"sfat":0,"DFib":0.025,"sugar":0.032,"sodium":0.18,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":16,"name":"Onion","kcal":0.3666667,"protein":0.01,"carbs":0.09,"fat":0,"sfat":0,"DFib":0.016667,"sugar":0.04,"sodium":0.04,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":17,"name":"Cauliflower","kcal":0.22,"protein":0.019,"carbs":0.05,"fat":0.003,"sfat":0.001,"DFib":0.02,"sugar":0.019,"sodium":0.3,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},
    {"index":18,"name":"Capsicum","kcal":0.178,"protein":0.009,"carbs":0.046,"fat":0.002,"sfat":0.001,"DFib":0.015,"sugar":0.024,"sodium":0.03,"sWeight":100,"click":0,"itemType":'vegetables',"weight":1,"metric":'g'},

  ];
  fruits1: any = [
    {"index":0,"name":"Apple","kcal":0.5,"protein":0.003,"carbs":0.14,"fat":0.002,"sfat":0,"DFib":0.024,"sugar":0.1,"sodium":0.01,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":1,"name":"Banana","kcal":0.89,"protein":0.011,"carbs":0.23,"fat":0.003,"sfat":0.001,"DFib":0.026,"sugar":0.12,"sodium":0.01,"sWeight":100,"click":0,"fruits":'vegetables',"weight":1,"metric":'g'},
    {"index":2,"name":"Orange","kcal":0.43,"protein":0.009,"carbs":0.12,"fat":0.001,"sfat":0,"DFib":0.024,"sugar":0.12,"sodium":0,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":3,"name":"Mango","kcal":0.6,"protein":0.008,"carbs":0.15,"fat":0.004,"sfat":0.001,"DFib":0.016,"sugar":0.14,"sodium":0.01,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":4,"name":"Guava","kcal":0.56,"protein":0.026,"carbs":0.14,"fat":0.01,"sfat":0.003,"DFib":0.05,"sugar":0.09,"sodium":0.02,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":5,"name":"Promogranate","kcal":0.78,"protein":0.017,"carbs":0.19,"fat":0.012,"sfat":0.001,"DFib":0.04,"sugar":0.14,"sodium":0.03,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":6,"name":"Muskmeleon","kcal":0.33,"protein":0.008,"carbs":0.08,"fat":0.002,"sfat":0.001,"DFib":0.009,"sugar":0.08,"sodium":0.16,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":7,"name":"Pineapple","kcal":0.49,"protein":0.005,"carbs":0.13,"fat":0.001,"sfat":0,"DFib":0.014,"sugar":0.1,"sodium":0.01,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":8,"name":"Papaya","kcal":0.42,"protein":0.005,"carbs":0.11,"fat":0.003,"sfat":0.001,"DFib":0.017,"sugar":0.08,"sodium":0.08,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":9,"name":"Watermeleon","kcal":0.35,"protein":0.006,"carbs":0.08,"fat":0.002,"sfat":0,"DFib":0.004,"sugar":0.06,"sodium":0.02,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":10,"name":"Lemon","kcal":0.32,"protein":0.011,"carbs":0.09,"fat":0.003,"sfat":0,"DFib":0.028,"sugar":0.025,"sodium":0.02,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'},
    {"index":11,"name":"Grapes","kcal":0.71,"protein":0.006,"carbs":0.17,"fat":0.004,"sfat":0.001,"DFib":0.009,"sugar":0.16,"sodium":0.02,"sWeight":100,"click":0,"itemType":'fruits',"weight":1,"metric":'g'}
  ];
  nuts1:any = [
    {"index":0,"name":"Cashew Nut","kcal":5.75,"protein":0.18,"carbs":0.3,"fat":0.44,"sfat":0.08,"DFib":0.033,"sugar":0.06,"sodium":0.12,"sWeight":100,"click":0,"itemType":'nuts',"weight":1,"metric":'g'},
    {"index":1,"name":"Almond","kcal":5.667,"protein":0.21,"carbs":0.22,"fat":0.49,"sfat":0.03,"DFib":0.12,"sugar":0.038333,"sodium":0.0166667,"sWeight":100,"click":0,"itemType":'nuts',"weight":1,"metric":'g'},
    {"index":2,"name":"Pista","kcal":5.57,"protein":0.2,"carbs":0.28,"fat":0.45,"sfat":0.06,"DFib":0.1,"sugar":0.08,"sodium":0.01,"sWeight":100,"click":0,"itemType":'nuts',"weight":1,"metric":'g'},
    {"index":3,"name":"Walnut","kcal":6.73,"protein":0.15,"carbs":0.14,"fat":0.65,"sfat":0.06,"DFib":0.07,"sugar":0.026,"sodium":0.02,"sWeight":100,"click":0,"itemType":'nuts',"weight":1,"metric":'g'},
    {"index":4,"name":"Peanut","kcal":6.02,"protein":0.24,"carbs":0.22,"fat":0.5,"sfat":0.07,"DFib":0.08,"sugar":0.042,"sodium":0.06,"sWeight":100,"click":0,"itemType":'nuts',"weight":1,"metric":'g'}
  ];
  liquids1:any =[

  ];
  seeds1:any = [
    {"index":0,"name":"Fenugreek Seeds","kcal":2.78,"protein":0.23,"carbs":0.58,"fat":0.06,"sfat":0.015,"DFib":0.25,"sugar":0,"sodium":0.67,"sWeight":100,"click":0,"itemType":'seeds',"weight":1,"metric":'g'},
    {"index":1,"name":"Poppy Seeds(","kcal":4.82,"protein":0.18,"carbs":0.28,"fat":0.42,"sfat":0.045,"DFib":0.2,"sugar":0.03,"sodium":0.26,"sWeight":100,"click":0,"itemType":'seeds',"weight":1,"metric":'g'},
    {"index":2,"name":"Cumin Seeds","kcal":4,"protein":0.18,"carbs":0.44,"fat":0.22,"sfat":0.015,"DFib":0.11,"sugar":0.023,"sodium":1.68,"sWeight":100,"click":0,"itemType":'seeds',"weight":1,"metric":'g'},
    {"index":3,"name":"Sesame Seeds","kcal":5.66,"protein":0.18,"carbs":0.23,"fat":0.5,"sfat":0.07,"DFib":0.12,"sugar":0.003,"sodium":0.11,"sWeight":100,"click":0,"itemType":'seeds',"weight":1,"metric":'g'},
    {"index":4,"name":"Tur Dal","kcal":3.3,"protein":0.22,"carbs":0.54,"fat":0.02,"sfat":0,"DFib":0.02,"sugar":0,"sodium":0,"sWeight":100,"click":0,"itemType":'seeds',"weight":1,"metric":'g'},
    {"index":5,"name":"Urad Dal","kcal":2.82,"protein":0.25,"carbs":0.59,"fat":0.016,"sfat":0.001,"DFib":0.18,"sugar":0,"sodium":0.38,"sWeight":100,"click":0,"itemType":'seeds',"weight":1,"metric":'g'},
    {"index":6,"name":"Mung Bean","kcal":2.95,"protein":0.24,"carbs":0.63,"fat":0.012,"sfat":0.003,"DFib":0.16,"sugar":0.07,"sodium":0.15,"sWeight":100,"click":0,"itemType":'seeds',"weight":1,"metric":'g'},
    {"index":7,"name":"Mustard Seeds","kcal":4.9,"protein":0.26,"carbs":0.28,"fat":0.36,"sfat":0.02,"DFib":0.12,"sugar":0.07,"sodium":0.13,"sWeight":100,"click":0,"itemType":'seeds',"weight":1,"metric":'g'}
  ];
  others1:any =[
    {"index":0,"name":"Rice","kcal":3.4933,"protein":0.07,"carbs":0.8,"fat":0.006667,"sfat":0.001333,"DFib":0.0133,"sugar":0.001333,"sodium":0.05,"sWeight":100,"click":0,"itemType":'others',"weight":1,"metric":'g'},
    {"index":1,"name":"Brown Rice(","kcal":3.52,"protein":0.08,"carbs":0.77,"fat":0.029,"sfat":0.006,"DFib":0.035,"sugar":0.009,"sodium":0.07,"sWeight":100,"click":0,"itemType":'others',"weight":1,"metric":'g'},
    {"index":2,"name":"Salt","kcal":0,"protein":0,"carbs":0,"fat":0,"sfat":0,"DFib":0,"sugar":0,"sodium":387,"sWeight":100,"click":0,"itemType":'others',"weight":1,"metric":'g'},
    {"index":3,"name":"Chilli Powder(","kcal":0,"protein":0.13,"carbs":0.5,"fat":0.14,"sfat":0.025,"DFib":0,"sugar":0.07,"sodium":16.4,"sWeight":100,"click":0,"itemType":'others',"weight":1,"metric":'g'},
    {"index":4,"name":"Turmeric ","kcal":0,"protein":0.08,"carbs":0.65,"fat":0.1,"sfat":0.031,"DFib":0.21,"sugar":0.032,"sodium":0.38,"sWeight":100,"click":0,"itemType":'others',"weight":1,"metric":'g'},
    {"index":5,"name":"Ginger","kcal":0.78,"protein":0.018,"carbs":0.18,"fat":0.008,"sfat":0.002,"DFib":0.02,"sugar":0.017,"sodium":0.13,"sWeight":100,"click":0,"itemType":'others',"weight":1,"metric":'g'},
    {"index":6,"name":"Garlic","kcal":1.52,"protein":0.06,"carbs":0.33,"fat":0.005,"sfat":0.001,"DFib":0.021,"sugar":0.01,"sodium":0.17,"sWeight":100,"click":0,"itemType":'others',"weight":1,"metric":'g'},
    {"index":7,"name":"Sugar","kcal":4,"protein":0,"carbs":1,"fat":0,"sfat":0,"DFib":0,"sugar":1,"sodium":0,"sWeight":100,"click":0,"itemType":'others',"weight":1,"metric":'g'}
  ];


  sports:any=[
    {"index":0,name:'Badminton',itemType:'sports',description:'general',met:5.5,mins:10,"click":0},
    {"index":1,name:'Badminton',itemType:'sports',description:'Competitive',met:7,mins:10,"click":0},
    {"index":2,name:'Baseball',itemType:'sports',description:'',met:6,mins:10,"click":0},
    {"index":3,name:'Basketball',itemType:'sports',description:'General',met:6.5,mins:10,"click":0},
    {"index":4,name:'Basketball',itemType:'sports',description:'Competitive',met:11.1,mins:10,"click":0},
    {"index":5,name:'Bicycling',itemType:'sports',description:'10 Km/h',met:4.8,mins:10,"click":0},
    {"index":6,name:'Bicycling',itemType:'sports',description:'15 Km/h',met:5.9,mins:10,"click":0},
    {"index":7,name:'Bicycling',itemType:'sports',description:'20 Km/h',met:7.1,mins:10,"click":0},
    {"index":8,name:'Bicycling',itemType:'sports',description:'25 Km/h',met:8.4,mins:10,"click":0},
    {"index":9,name:'Bicycling',itemType:'sports',description:'30 Km/h',met:9.8,mins:10,"click":0},
    {"index":10,name:'Boxing',itemType:'sports',description:'',met:13.4,mins:10,"click":0},
    {"index":11,name:'Cricket',itemType:'sports',description:'',met:6.1,mins:10,"click":0},
    {"index":12,name:'Darts',itemType:'sports',description:'Lawn or wall',met:2.5,mins:10,"click":0},
    {"index":13,name:'Football',itemType:'sports',description:'competitive',met:9.0,mins:10,"click":0},
    {"index":14,name:'Football',itemType:'sports',description:'touch and flag , general',met:8.0,mins:10,"click":0},
    {"index":15,name:'Golf',itemType:'sports',description:'General',met:4.8,mins:10,"click":0},
    {"index":16,name:'Gymnastics',itemType:'sports',description:'General',met:3.8,mins:10,"click":0},
    {"index":17,name:'Hockey',itemType:'sports',description:'Field',met:7.8,mins:10,"click":0},
    {"index":18,name:'Hockey Ice',itemType:'sports',description:'General',met:8.0,mins:10,"click":0},
    {"index":19,name:'Judo',itemType:'sports',description:'',met:10.5,mins:10,"click":0},
    {"index":20,name:'Jogging',itemType:'sports',description:'9 kmph',met:8.8,mins:10,"click":0},
    {"index":21,name:'Jogging',itemType:'sports',description:'11 kmph',met:11.2,mins:10,"click":0},
    {"index":22,name:'Karate',itemType:'sports',description:'Practice',met:5.0,mins:10,"click":0},
    {"index":23,name:'Karate',itemType:'sports',description:'Moderate',met:8.0,mins:10,"click":0},
    {"index":24,name:'Martial Arts',itemType:'sports',description:'slower pace, novice performers, practice',met:5.3,mins:10,"click":0},
    {"index":25,name:'Martial Arts',itemType:'sports',description:'judo, jujitsu, karate, kick boxing',met:10.3,mins:10,"click":0},
    {"index":26,name:'Running',itemType:'sports',description:'13 kmph',met:12.9,mins:10,"click":0},
    {"index":27,name:'Running',itemType:'sports',description:'15 kmph',met:14.6,mins:10,"click":0},
    {"index":28,name:'Skateboarding',itemType:'sports',description:'General',met:5.0,mins:10,"click":0},
    {"index":29,name:'Skateboarding',itemType:'sports',description:'Moderate',met:6.0,mins:10,"click":0},
    {"index":30,name:'Soccer',itemType:'sports',description:'General',met:7.0,mins:10,"click":0},
    {"index":31,name:'Soccer',itemType:'sports',description:'Competitive',met:10.0,mins:10,"click":0},
    {"index":32,name:'Softball',itemType:'sports',description:'Practice',met:4.0,mins:10,"click":0},
    {"index":33,name:'Softball',itemType:'sports',description:'Pitching',met:6.0,mins:10,"click":0},
    {"index":34,name:'Squash',itemType:'sports',description:'General',met:7.3,mins:10,"click":0},
    {"index":35,name:'Swimming',itemType:'sports',description:'laps – freestyle/crawl light – moderate effort',met:5.8,mins:10,"click":0},
    {"index":36,name:'Swimming',itemType:'sports',description:'backstroke, general, training or competition',met:9.5,mins:10,"click":0},
    {"index":37,name:'Swimming',itemType:'sports',description:'breaststroke, general, training or competition',met:10.3,mins:10,"click":0},
    {"index":38,name:'Swimming',itemType:'sports',description:'butterfly, general',met:13.8,mins:10,"click":0},
    {"index":39,name:'Swimming',itemType:'sports',description:'fast speed, ~75 yards/minute',met:10.0,mins:10,"click":0},
    {"index":40,name:'Swimming',itemType:'sports',description:'medium speed, ~50 yards/minute',met:8.3,mins:10,"click":0},
    {"index":41,name:'Tennis',itemType:'sports',description:'General',met:7.3,mins:10,"click":0},
    {"index":42,name:'Tennis',itemType:'sports',description:'Doubles',met:6.0,mins:10,"click":0},
    {"index":43,name:'Tennis',itemType:'sports',description:'Singles',met:8.0,mins:10,"click":0},
    {"index":44,name:'Volleyball',itemType:'sports',description:'General',met:4.0,mins:10,"click":0},
    {"index":45,name:'Volleyball',itemType:'sports',description:'Competitive',met:6.0,mins:10,"click":0},
    {"index":46,name:'Wrestling',itemType:'sports',description:'1 match = 5 mins',met:6.0,mins:10,"click":0},


  ];
  houseWorks:any = [

    {"index":0,name:'Cooking',itemType:'home',description:'',met:2.5,mins:10,"click":0},
    {"index":1,name:'Dishes',itemType:'home',description:'',met:2.1,mins:10,"click":0},
    {"index":2,name:'Ironing',itemType:'home',description:'',met:2.0,mins:10,"click":0},
    {"index":3,name:'Watering plants',itemType:'home',description:'',met:2.5,mins:10,"click":0},
    {"index":4,name:'Cleaning Floor',itemType:'home',description:'',met:3.3,mins:10,"click":0},
    {"index":5,name:'Gardening',itemType:'home',description:'',met:2.5,mins:10,"click":0},
  ];

  endurance:any = [

    {"index":0,name:'Brisk Walk',itemType:'endurance',description:'3-4 Mph',met:4,mins:10,"click":0},
    {"index":1,name:'Dancing',itemType:'endurance',description:'aerobic, general',met:7.3,mins:10,"click":0},
    {"index":2,name:'Dancing',itemType:'endurance',description:'tballet, modern, or jazz',met:6.8,mins:10,"click":0},
    {"index":3,name:'Swimming',itemType:'endurance',description:'fast speed, ~75 yards/minute',met:10.0,mins:10,"click":0},
    {"index":4,name:'Swimming',itemType:'endurance',description:'medium speed, ~50 yards/minute',met:8.3,mins:10,"click":0},
    {"index":5,name:'Climbing stairs',itemType:'endurance',description:'',met:9.0,mins:10,"click":0},
    {"index":6,name:'Tennis',itemType:'endurance',description:'General',met:7.3,mins:10,"click":0},
    {"index":7,name:'Basketball',itemType:'endurance',description:'General',met:6.5,mins:10,"click":0},
];
 strength:any = [

    {"index":0,name:'Lifting Weights',itemType:'strength',description:'General',met:4.8,mins:10,"click":0},
   {"index":1,name:'Lifting Weights',itemType:'strength',description:'Moderate',met:6.0,mins:10,"click":0},
   {"index":2,name:'Resistance Bands',itemType:'strength',description:'Blue',met:3.3,mins:10,"click":0},
   {"index":3,name:'Resistance Bands',itemType:'strength',description:'Black',met:4.0,mins:10,"click":0},
   {"index":4,name:'Heavy Gardening',itemType:'strength',description:'',met:4.0,mins:10,"click":0},
   {"index":5,name:'Climbing stairs',itemType:'strength',description:'',met:9.0,mins:10,"click":0},
   {"index":6,name:'Bicycling',itemType:'strength',description:'15 Km/h',met:5.9,mins:10,"click":0},
   {"index":7,name:'Bicycling',itemType:'strength',description:'20 Km/h',met:7.1,mins:10,"click":0},
   {"index":8,name:'Bicycling',itemType:'strength',description:'25 Km/h',met:8.4,mins:10,"click":0},
   {"index":9,name:'Dancing',itemType:'strength',description:'aerobic, general',met:7.3,mins:10,"click":0},
   {"index":10,name:'Dancing',itemType:'strength',description:'tballet, modern, or jazz',met:6.8,mins:10,"click":0},
   {"index":11,name:'Pull-ups',itemType:'strength',description:'Moderate',met:4.0,mins:10,"click":0},
   {"index":12,name:'Pull-ups',itemType:'strength',description:'Explosive',met:8.0,mins:10,"click":0},
   {"index":13,name:'Push-ups',itemType:'strength',description:'Moderate',met:4.0,mins:10,"click":0},
   {"index":14,name:'Push-ups',itemType:'strength',description:'Explosive',met:8.0,mins:10,"click":0},
   {"index":15,name:'Squats',itemType:'strength',description:'',met:6.0,mins:10,"click":0},
   {"index":16,name:'Lunges',itemType:'strength',description:'',met:6.0,mins:10,"click":0}

 ];
 conditioning:any =[

   {"index":0,name:'Calisthenics Moderate',itemType:'conditioning',description:'(push ups, sit ups, pull-ups, lunges)',met:6.0,mins:10,"click":0},
   {"index":1,name:'Calisthenics Explosive',itemType:'conditioning',description:'(push ups, sit ups, pull-ups, lunges)',met:8.0,mins:10,"click":0},
   {"index":2,name:'Abdominal Crunches',itemType:'conditioning',description:'Light effort',met:2.8,mins:10,"click":0},
   {"index":3,name:'Stretching',itemType:'conditioning',description:'',met:4.0,mins:10,"click":0},
   {"index":4,name:'Suryanamaskhar',itemType:'conditioning',description:'Yoga',met:3.3,mins:10,"click":0},
   {"index":5,name:'Power Yoga',itemType:'conditioning',description:'',met:4.0,mins:10,"click":0},

 ];

 flexibility:any=[

   {"index":0,name:'Stretching',itemType:'conditioning',description:'',met:4.0,mins:10,"click":0},
   {"index":1,name:'Suryanamaskhar',itemType:'conditioning',description:'Yoga',met:3.3,mins:10,"click":0},
   {"index":2,name:'Power Yoga',itemType:'conditioning',description:'',met:4.0,mins:10,"click":0},
   {"index":3,name:'Hatha Yoga',itemType:'conditioning',description:'',met:2.5,mins:10,"click":0},
   {"index":4,name:'Nadisodhana Yoga',itemType:'conditioning',description:'',met:2.0,mins:10,"click":0},
 ];

  sports1:any=[
    {"index":0,name:'Badminton',itemType:'sports',description:'general',met:5.5,mins:10,"click":0},
    {"index":1,name:'Badminton',itemType:'sports',description:'Competitive',met:7,mins:10,"click":0},
    {"index":2,name:'Baseball',itemType:'sports',description:'',met:6,mins:10,"click":0},
    {"index":3,name:'Basketball',itemType:'sports',description:'General',met:6.5,mins:10,"click":0},
    {"index":4,name:'Basketball',itemType:'sports',description:'Competitive',met:11.1,mins:10,"click":0},
    {"index":5,name:'Bicycling',itemType:'sports',description:'10 Km/h',met:4.8,mins:10,"click":0},
    {"index":6,name:'Bicycling',itemType:'sports',description:'15 Km/h',met:5.9,mins:10,"click":0},
    {"index":7,name:'Bicycling',itemType:'sports',description:'20 Km/h',met:7.1,mins:10,"click":0},
    {"index":8,name:'Bicycling',itemType:'sports',description:'25 Km/h',met:8.4,mins:10,"click":0},
    {"index":9,name:'Bicycling',itemType:'sports',description:'30 Km/h',met:9.8,mins:10,"click":0},
    {"index":10,name:'Boxing',itemType:'sports',description:'',met:13.4,mins:10,"click":0},
    {"index":11,name:'Cricket',itemType:'sports',description:'',met:6.1,mins:10,"click":0},
    {"index":12,name:'Darts',itemType:'sports',description:'Lawn or wall',met:2.5,mins:10,"click":0},
    {"index":13,name:'Football',itemType:'sports',description:'competitive',met:9.0,mins:10,"click":0},
    {"index":14,name:'Football',itemType:'sports',description:'touch and flag , general',met:8.0,mins:10,"click":0},
    {"index":15,name:'Golf',itemType:'sports',description:'General',met:4.8,mins:10,"click":0},
    {"index":16,name:'Gymnastics',itemType:'sports',description:'General',met:3.8,mins:10,"click":0},
    {"index":17,name:'Hockey',itemType:'sports',description:'Field',met:7.8,mins:10,"click":0},
    {"index":18,name:'Hockey Ice',itemType:'sports',description:'General',met:8.0,mins:10,"click":0},
    {"index":19,name:'Judo',itemType:'sports',description:'',met:10.5,mins:10,"click":0},
    {"index":20,name:'Jogging',itemType:'sports',description:'9 kmph',met:8.8,mins:10,"click":0},
    {"index":21,name:'Jogging',itemType:'sports',description:'11 kmph',met:11.2,mins:10,"click":0},
    {"index":22,name:'Karate',itemType:'sports',description:'Practice',met:5.0,mins:10,"click":0},
    {"index":23,name:'Karate',itemType:'sports',description:'Moderate',met:8.0,mins:10,"click":0},
    {"index":24,name:'Martial Arts',itemType:'sports',description:'slower pace, novice performers, practice',met:5.3,mins:10,"click":0},
    {"index":25,name:'Martial Arts',itemType:'sports',description:'judo, jujitsu, karate, kick boxing',met:10.3,mins:10,"click":0},
    {"index":26,name:'Running',itemType:'sports',description:'13 kmph',met:12.9,mins:10,"click":0},
    {"index":27,name:'Running',itemType:'sports',description:'15 kmph',met:14.6,mins:10,"click":0},
    {"index":28,name:'Skateboarding',itemType:'sports',description:'General',met:5.0,mins:10,"click":0},
    {"index":29,name:'Skateboarding',itemType:'sports',description:'Moderate',met:6.0,mins:10,"click":0},
    {"index":30,name:'Soccer',itemType:'sports',description:'General',met:7.0,mins:10,"click":0},
    {"index":31,name:'Soccer',itemType:'sports',description:'Competitive',met:10.0,mins:10,"click":0},
    {"index":32,name:'Softball',itemType:'sports',description:'Practice',met:4.0,mins:10,"click":0},
    {"index":33,name:'Softball',itemType:'sports',description:'Pitching',met:6.0,mins:10,"click":0},
    {"index":34,name:'Squash',itemType:'sports',description:'General',met:7.3,mins:10,"click":0},
    {"index":35,name:'Swimming',itemType:'sports',description:'laps – freestyle/crawl light – moderate effort',met:5.8,mins:10,"click":0},
    {"index":36,name:'Swimming',itemType:'sports',description:'backstroke, general, training or competition',met:9.5,mins:10,"click":0},
    {"index":37,name:'Swimming',itemType:'sports',description:'breaststroke, general, training or competition',met:10.3,mins:10,"click":0},
    {"index":38,name:'Swimming',itemType:'sports',description:'butterfly, general',met:13.8,mins:10,"click":0},
    {"index":39,name:'Swimming',itemType:'sports',description:'fast speed, ~75 yards/minute',met:10.0,mins:10,"click":0},
    {"index":40,name:'Swimming',itemType:'sports',description:'medium speed, ~50 yards/minute',met:8.3,mins:10,"click":0},
    {"index":41,name:'Tennis',itemType:'sports',description:'General',met:7.3,mins:10,"click":0},
    {"index":42,name:'Tennis',itemType:'sports',description:'Doubles',met:6.0,mins:10,"click":0},
    {"index":43,name:'Tennis',itemType:'sports',description:'Singles',met:8.0,mins:10,"click":0},
    {"index":44,name:'Volleyball',itemType:'sports',description:'General',met:4.0,mins:10,"click":0},
    {"index":45,name:'Volleyball',itemType:'sports',description:'Competitive',met:6.0,mins:10,"click":0},
    {"index":46,name:'Wrestling',itemType:'sports',description:'1 match = 5 mins',met:6.0,mins:10,"click":0}

  ];
  houseWorks1:any = [

    {"index":0,name:'Cooking',itemType:'home',description:'',met:2.5,mins:10,"click":0},
    {"index":1,name:'Dishes',itemType:'home',description:'',met:2.1,mins:10,"click":0},
    {"index":2,name:'Ironing',itemType:'home',description:'',met:2.0,mins:10,"click":0},
    {"index":3,name:'Watering plants',itemType:'home',description:'',met:2.5,mins:10,"click":0},
    {"index":4,name:'Cleaning Floor',itemType:'home',description:'',met:3.3,mins:10,"click":0},
    {"index":5,name:'Gardening',itemType:'home',description:'',met:2.5,mins:10,"click":0},
  ];

  endurance1:any = [

    {"index":0,name:'Brisk Walk',itemType:'endurance',description:'3-4 Mph',met:4,mins:10,"click":0},
    {"index":1,name:'Dancing',itemType:'endurance',description:'aerobic, general',met:7.3,mins:10,"click":0},
    {"index":2,name:'Dancing',itemType:'endurance',description:'tballet, modern, or jazz',met:6.8,mins:10,"click":0},
    {"index":3,name:'Swimming',itemType:'endurance',description:'fast speed, ~75 yards/minute',met:10.0,mins:10,"click":0},
    {"index":4,name:'Swimming',itemType:'endurance',description:'medium speed, ~50 yards/minute',met:8.3,mins:10,"click":0},
    {"index":5,name:'Climbing stairs',itemType:'endurance',description:'',met:9.0,mins:10,"click":0},
    {"index":6,name:'Tennis',itemType:'endurance',description:'General',met:7.3,mins:10,"click":0},
    {"index":7,name:'Basketball',itemType:'endurance',description:'General',met:6.5,mins:10,"click":0},
  ];
  strength1:any = [

    {"index":0,name:'Lifting Weights',itemType:'strength',description:'General',met:4.8,mins:10,"click":0},
    {"index":1,name:'Lifting Weights',itemType:'strength',description:'Moderate',met:6.0,mins:10,"click":0},
    {"index":2,name:'Resistance Bands',itemType:'strength',description:'Blue',met:3.3,mins:10,"click":0},
    {"index":3,name:'Resistance Bands',itemType:'strength',description:'Black',met:4.0,mins:10,"click":0},
    {"index":4,name:'Heavy Gardening',itemType:'strength',description:'',met:4.0,mins:10,"click":0},
    {"index":5,name:'Climbing stairs',itemType:'strength',description:'',met:9.0,mins:10,"click":0},
    {"index":6,name:'Bicycling',itemType:'strength',description:'15 Km/h',met:5.9,mins:10,"click":0},
    {"index":7,name:'Bicycling',itemType:'strength',description:'20 Km/h',met:7.1,mins:10,"click":0},
    {"index":8,name:'Bicycling',itemType:'strength',description:'25 Km/h',met:8.4,mins:10,"click":0},
    {"index":9,name:'Dancing',itemType:'strength',description:'aerobic, general',met:7.3,mins:10,"click":0},
    {"index":10,name:'Dancing',itemType:'strength',description:'tballet, modern, or jazz',met:6.8,mins:10,"click":0},
    {"index":11,name:'Pull-ups',itemType:'strength',description:'Moderate',met:4.0,mins:10,"click":0},
    {"index":12,name:'Pull-ups',itemType:'strength',description:'Explosive',met:8.0,mins:10,"click":0},
    {"index":13,name:'Push-ups',itemType:'strength',description:'Moderate',met:4.0,mins:10,"click":0},
    {"index":14,name:'Push-ups',itemType:'strength',description:'Explosive',met:8.0,mins:10,"click":0},
    {"index":15,name:'Squats',itemType:'strength',description:'',met:6.0,mins:10,"click":0},
    {"index":16,name:'Lunges',itemType:'strength',description:'',met:6.0,mins:10,"click":0}

  ];
  conditioning1:any =[

    {"index":0,name:'Calisthenics Moderate',itemType:'conditioning',description:'(push ups, sit ups, pull-ups, lunges)',met:6.0,mins:10,"click":0},
    {"index":1,name:'Calisthenics Explosive',itemType:'conditioning',description:'(push ups, sit ups, pull-ups, lunges)',met:8.0,mins:10,"click":0},
    {"index":2,name:'Abdominal Crunches',itemType:'conditioning',description:'Light effort',met:2.8,mins:10,"click":0},
    {"index":3,name:'Stretching',itemType:'conditioning',description:'',met:4.0,mins:10,"click":0},
    {"index":4,name:'Suryanamaskhar',itemType:'conditioning',description:'Yoga',met:3.3,mins:10,"click":0},
    {"index":5,name:'Power Yoga',itemType:'conditioning',description:'',met:4.0,mins:10,"click":0},

  ];

  flexibility1:any=[

    {"index":0,name:'Stretching',itemType:'conditioning',description:'',met:4.0,mins:10,"click":0},
    {"index":1,name:'Suryanamaskhar',itemType:'conditioning',description:'Yoga',met:3.3,mins:10,"click":0},
    {"index":2,name:'Power Yoga',itemType:'conditioning',description:'',met:4.0,mins:10,"click":0},
    {"index":3,name:'Hatha Yoga',itemType:'conditioning',description:'',met:2.5,mins:10,"click":0},
    {"index":4,name:'Nadisodhana Yoga',itemType:'conditioning',description:'',met:2.0,mins:10,"click":0},
  ];
  constructor() { }
}
