package com.barnum.utils;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import au.com.bytecode.opencsv.CSVReader;

/**
 * Hello world!
 *
 */
public class App {
	/**
	 * 0 1 Year 2 Site Name 3 Site Number 4 Lat 5 Long
	 */
	public static int YEAR = 1;
	public static int SITE_NAME = 2;
	public static int SITE_NUMBER = 3;
	public static int LATITUDE = 4;
	public static int LONGITUDE = 5;
	public static int NUMBER_ICONS = 6;
	public static int FB_LINK=7;

	public static void main(String[] args) {

		String fileName = "ccdata.csv";
		CSVReader reader;
		try {
			reader = new CSVReader(new FileReader(new File("/tmp/" + fileName)));
			List<String[]> myEntries = reader.readAll();
			ArrayList<CCData> data = new ArrayList<CCData>();
			for (int j =1; j< myEntries.size(); j++) {
				String[] row = myEntries.get(j);
				CCData d = new CCData();
				d.setYear(row[YEAR]);
				d.setSiteName(row[SITE_NAME]);
				d.setSiteNumber(row[SITE_NUMBER]);
				d.setLatitude(row[LATITUDE]);
				d.setLongitude(row[LONGITUDE]);
				d.setFbLink(row[FB_LINK]);
				int numberOfIcons =Integer.parseInt(row[NUMBER_ICONS]);
				//naming scheme is
				ArrayList<String> icons = new ArrayList<String>();
				//add the first icon they all have this 
				icons.add("images/"+ row[YEAR]+".jpg");
				if (numberOfIcons >1) {
					for (int ii=1; ii< numberOfIcons; ii++) {
						icons.add("images/"+row[YEAR]+"-"+Integer.toString(ii)+".jpg");
					}
				}
				d.setIcon(icons.toArray(new String[icons.size()]));
				
				
				
				data.add(d);
			}
			
			Gson converter = new GsonBuilder().setPrettyPrinting().create();
			String output = converter.toJson(data);
			System.out.println(output);
			FileWriter f = new FileWriter(new File("/tmp/" + "ccdata.json"));
			f.write(output);
			f.flush();
			f.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
}
