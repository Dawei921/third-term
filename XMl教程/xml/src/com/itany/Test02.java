package com.itany;

import java.io.File;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

/*
 * 添加、删除、修改XML文件
 */
public class Test02 {
	public static void main(String[] args) throws Exception {
		DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();// 创建DOM工厂：DocumentBuilderFactory
		DocumentBuilder db = dbf.newDocumentBuilder();// 创建DOM构建器：DocumentBuilder
		Document document = db.parse(new File("WebRoot/students.xml"));// 解析XML文件获取DOM文档：Document
		
		//添加节点
//		Element student = document.createElement("student");
//		student.setAttribute("sn", "08");
//		Element name = document.createElement("name");
//		Element age = document.createElement("age");
//		Text txtName=document.createTextNode("tom");//创建文档节点
//		Text txtAge=document.createTextNode("27");
//		name.appendChild(txtName);
//		age.appendChild(txtAge);
//		student.appendChild(name);
//		student.appendChild(age);
//		
		Element root = document.getDocumentElement(); //获取根元素students
//		root.appendChild(student);
		
		//删除节点
//		Node studentDelete=document.getElementsByTagName("student").item(0);
//		root.removeChild(studentDelete);
		
		//修改节点
		Element studentModify=(Element) document.getElementsByTagName("student").item(0);
		Element ageModify=(Element) studentModify.getElementsByTagName("age").item(0);
		ageModify.getFirstChild().setNodeValue("44");
		
		
		//将源树转换为结果树，即将内存中的xml文档树保存到xml文件中
		TransformerFactory tff=TransformerFactory.newInstance();
		Transformer tf = tff.newTransformer();
		
		DOMSource source=new DOMSource(document); //获得document
		StreamResult result=new StreamResult(new File("WebRoot/students.xml"));//获得结果地址
		
		tf.transform(source, result);
		System.out.println("更新学生成功！");
		
		
				
//		show(document);
		
	}
	
	public static void show(Document document){
		NodeList students = document.getElementsByTagName("student");
		for(int i=0;i<students.getLength();i++){
			Element student = (Element)students.item(i);
			String sn=student.getAttribute("sn");
			System.out.println(sn);
			Element name=(Element) student.getElementsByTagName("name").item(0);
			Element age=(Element) student.getElementsByTagName("age").item(0);
			System.out.println(name.getFirstChild().getNodeValue());
			System.out.println(age.getFirstChild().getNodeValue());
			System.out.println();
		}
	}
}
