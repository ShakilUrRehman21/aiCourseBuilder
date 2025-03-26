/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a course tutorial on following detail with field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level: Basic, Duration:1 Hours, No Of Chapters;5, in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course_name\": \"Python Programming Fundamentals\",\n  \"description\": \"This introductory course covers the essential concepts and syntax of Python programming. You'll learn how to write basic Python programs, work with variables, data types, operators, and control flow statements. By the end of this course, you'll have a solid foundation in Python programming and be ready to tackle more advanced topics.\",\n  \"chapters\": [\n    {\n      \"chapter_name\": \"Introduction to Python\",\n      \"about\": \"This chapter introduces the Python programming language, its history, key features, and why it's a popular choice for various applications. It also covers setting up your Python development environment and writing your first Python program.\",\n      \"duration\": \"30 minutes\"\n    },\n    {\n      \"chapter_name\": \"Variables and Data Types\",\n      \"about\": \"This chapter explores variables, data types, and how to work with them in Python. You'll learn about integers, floats, strings, booleans, and how to perform basic operations on these data types.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapter_name\": \"Operators and Expressions\",\n      \"about\": \"This chapter dives into Python operators, including arithmetic, comparison, logical, and bitwise operators. You'll learn how to use these operators to build expressions and perform calculations.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapter_name\": \"Control Flow Statements\",\n      \"about\": \"This chapter covers control flow statements, including if-else statements, for loops, and while loops. You'll learn how to use these statements to control the flow of execution in your Python programs.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapter_name\": \"Functions and Modules\",\n      \"about\": \"This chapter introduces functions, which are reusable blocks of code that perform specific tasks. You'll also learn about modules, which provide pre-written functions and classes that you can use in your programs.\",\n      \"duration\": \"10 minutes\"\n    }\n  ],\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\",\n  \"no_of_chapters\": 5\n}\n``` \n"},
          ],
        },
      ],
    });
  

    export const GenerateChapterContent_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Explain the concept in detail on Topic: Java: OOPS Concepts, Chapter: Advanced Object-Oriented Programming in JSON format with list of array with fields as title, description in detail, and code example (Code field <precode> format) if applicable."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"title\": \"Abstract Classes\",\n    \"description\": \"Abstract classes are blueprints for other classes. They can't be instantiated directly but can be extended by other classes. They often contain abstract methods, which are methods declared without implementation. Subclasses must provide concrete implementations for these abstract methods.\",\n    \"code\": \"<precode>\\npublic abstract class Shape {\\n  public abstract double getArea();\\n}\\n\\npublic class Circle extends Shape {\\n  private double radius;\\n\\n  public Circle(double radius) {\\n    this.radius = radius;\\n  }\\n\\n  @Override\\n  public double getArea() {\\n    return Math.PI * radius * radius;\\n  }\\n}\\n</precode>\"\n  },\n  {\n    \"title\": \"Interfaces\",\n    \"description\": \"Interfaces define contracts that classes can implement. They specify methods that a class must implement, but they don't provide any implementation. This promotes polymorphism and loose coupling. A class can implement multiple interfaces.\",\n    \"code\": \"<precode>\\npublic interface Drawable {\\n  void draw();\\n}\\n\\npublic class Circle implements Drawable {\\n  @Override\\n  public void draw() {\\n    System.out.println(\\\"Drawing a circle\\\");\\n  }\\n}\\n</precode>\"\n  },\n  {\n    \"title\": \"Polymorphism\",\n    \"description\": \"Polymorphism means \\\"many forms.\\\" It allows objects of different classes to be treated as objects of a common type (interface or superclass). This enables flexibility and code reusability.\",\n    \"code\": \"<precode>\\npublic class ShapeTester {\\n  public static void main(String[] args) {\\n    Shape circle = new Circle(5.0);\\n    Shape square = new Square(4.0);\\n\\n    System.out.println(\\\"Circle Area: \\\" + circle.getArea());\\n    System.out.println(\\\"Square Area: \\\" + square.getArea());\\n  }\\n}\\n</precode>\"\n  },\n  {\n    \"title\": \"Inner Classes\",\n    \"description\": \"Inner classes are classes defined inside another class. They have access to the enclosing class's members, even private ones. They can be static or non-static.\",\n    \"code\": \"<precode>\\npublic class OuterClass {\\n  private int outerVar = 10;\\n\\n  class InnerClass {\\n    public void display() {\\n      System.out.println(\\\"Outer variable: \\\" + outerVar);\\n    }\\n  }\\n}\\n</precode>\"\n  },\n  {\n    \"title\": \"Anonymous Classes\",\n    \"description\": \"Anonymous classes are unnamed classes that are defined and instantiated in a single line. They're used to provide quick implementations for interfaces or abstract classes without needing separate class definitions.\",\n    \"code\": \"<precode>\\nDrawable drawable = new Drawable() {\\n  @Override\\n  public void draw() {\\n    System.out.println(\\\"Drawing anonymously\\\");\\n  }\\n};\\n</precode>\"\n  },\n  {\n    \"title\": \"Reflection\",\n    \"description\": \"Reflection allows you to examine and manipulate classes, methods, and fields at runtime. It provides access to meta-information about objects, enabling dynamic behavior.\",\n    \"code\": \"<precode>\\nClass<?> circleClass = Class.forName(\\\"Circle\\\");\\nConstructor<?> constructor = circleClass.getConstructor(double.class);\\nCircle circle = (Circle) constructor.newInstance(5.0);\\n</precode>\"\n  },\n  {\n    \"title\": \"Generics\",\n    \"description\": \"Generics allow you to write code that works with various types without having to specify the exact type at compile time. They improve code reusability and type safety.\",\n    \"code\": \"<precode>\\npublic class GenericList<T> {\\n  private T[] items;\\n\\n  public GenericList(T[] items) {\\n    this.items = items;\\n  }\\n\\n  public T get(int index) {\\n    return items[index];\\n  }\\n}\\n</precode>\"\n  },\n  {\n    \"title\": \"Enums\",\n    \"description\": \"Enums (enumerations) define a set of named constants. They provide a type-safe way to represent a fixed set of values.\",\n    \"code\": \"<precode>\\npublic enum TrafficLight {\\n  RED, YELLOW, GREEN\\n}\\n</precode>\"\n  },\n  {\n    \"title\": \"Lambda Expressions\",\n    \"description\": \"Lambda expressions are concise, anonymous functions that can be used to implement functional interfaces. They improve code readability and conciseness.\",\n    \"code\": \"<precode>\\nDrawable drawable = () -> System.out.println(\\\"Drawing with a lambda\\\");\\n</precode>\"\n  }\n]\n```"},
          ],
        },
      ],
    });
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  
  