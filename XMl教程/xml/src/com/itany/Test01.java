package com.itany;

import java.io.File;
import java.io.IOException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.w3c.dom.Text;
import org.xml.sax.SAXException;

/*
 * 使用DOM解析XML文件
 * 步骤：
 * 1.创建DOM工厂：DocumentBuilderFactory
 * 2.创建DOM构建器：DocumentBuilder
 * 3.解析XML文件获取DOM文档：Document
 * 4.按照DOM规范进行操作： Node、Element、Attr、Text
 */
public class Test01 {
	public static void main(String[] args) {
		try {
			DocumentBuilderFactory dbf=DocumentBuilderFactory.newInstance();
			DocumentBuilder db = dbf.newDocumentBuilder();
			Document document = db.parse(new File("WebRoot/students.xml"));
			NodeList students = document.getElementsByTagName("student");
			for(int i=0;i<students.getLength();i++){
				Element student = (Element)students.item(i);
				String sn=student.getAttribute("sn");
				System.out.println(sn);
				Element name=(Element) student.getElementsByTagName("name").item(0);
				Element age=(Element) student.getElementsByTagName("age").item(0);
//				Text txt = (Text) name.getFirstChild();
//				System.out.println(txt.getNodeValue());
				System.out.println(name.getFirstChild().getNodeValue());
				System.out.println(age.getFirstChild().getNodeValue());
				System.out.println();
			}
			
		} catch (ParserConfigurationException e) {
			e.printStackTrace();
		} catch (SAXException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
