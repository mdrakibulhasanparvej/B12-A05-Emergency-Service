1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
  Answer:
    getElementById():  শুধু একটি element বের করে আনে যেটার id attribute আছে,  সব সময় একটা single element return করে।
    getElementsByClassName(): নির্দিষ্ট class name এর সব element গুলো বের করে আনে, একটা HTMLCollection return করে (array-এর মতো, কিন্তু পুরোপুরি array না।
    querySelector(): CSS selector এর মতো syntax দিয়ে element খুঁজে আনে, শুধু প্রথম matching element return করে।
    querySelectorAll(): CSS selector দিয়ে মিল থাকা সবগুলো element খুঁজে আনে, একটা NodeList return করে (যেটা forEach loop এ সরাসরি ব্যবহার করা যায়)।

2. How do you create and insert a new element into the DOM?
  Answer:
    নতুন element তৈরি করার জন্য  document.createElement("tagName") লাইনটি লিখতে হবে, তারপর element-এর কনটেন্ট/অ্যাট্রিবিউট সেট করতে হবে: যেমন innerHTML, textContent, বা
    setAttribute(), তারপর element-কে DOM-এ যুক্ত করা  appendChild(), append(), prepend(), insertBefore() ইত্যাদি মেথড ব্যবহার করে যুক্ত করতে হবে।
Example:
        ১. নতুন element তৈরি করবো
        let newPara = document.createElement("p");
        ২. কনটেন্ট বসাবো
        newPara.textContent = "A Quick Brown fox Jumped Over The Lazy Dogs.";
        ৩. DOM এ ইনসার্ট করা (body এর মধ্যে)
        document.body.appendChild(newPara);

3. What is Event Bubbling and how does it work?
   Answer:
     Event Bubbling হলো JavaScript-এর একটি ইভেন্ট প্রপাগেশন (Event Propagation) মেকানিজম। যখন কোনো child element-এ event (যেমন click) ঘটে, তখন সেই ইভেন্টটি প্রথমে child
     element এ হ্যান্ডেল হয়, তারপর ধাপে ধাপে তার parent - grandparent - document - window পর্যন্ত উপরের দিকে চলে যায়। এই উপরের দিকে যাওয়ার প্রক্রিয়াটাকেই বলা হয় Event Bubbling।

4. What is Event Delegation in JavaScript? Why is it useful?
   Answer:
     Event Delegation হলো একটি টেকনিক যেখানে আমরা কোনো child element-এ সরাসরি event listener বসাই না, বরং parent element-এ একটি event listener বসাই। তারপর Event
     Bubbling-এর মাধ্যমে child element-এ হওয়া ইভেন্ট parent এ পৌঁছে যায়, আর আমরা parent থেকে event.target ব্যবহার করে child element কে চিনে ফেলি।
     প্রতিটি ছোট element-এ আলাদা আলাদা event বসানোর পরিবর্তে parent এ একটি event বসানো হয় এবং সব child element এর ইভেন্ট parent এর মাধ্যমে হ্যান্ডেল করা হয়।

   Why is it useful?
   
   সুবিধা (Advantages):
      1.	Performance ভালো হয় → অনেক child element এর জন্য আলাদা আলাদা event বসানোর দরকার নেই।
      2.	Dynamic elements handle করা যায় → পরবর্তীতে যদি নতুন <li> যোগ করো, তবুও parent এর event listener এটাকে ধরবে।
      3.	কোড ছোট ও মেইনটেইনেবল হয় → সব child এর ইভেন্ট parent এ ম্যানেজ করা যায়।
         
  অসুবিধা (Disadvantages):
      1.	যদি parent এর মধ্যে অনেক ভিন্ন ভিন্ন child থাকে, তাহলে event.target চেক করার জন্য বেশি condition লাগতে পারে।
      2.	Event Bubbling এর কারণে কখনও ভুল element এ trigger হতে পারে, তাই condition ভালোভাবে লিখতে হয়।

   
6. What is the difference between preventDefault() and stopPropagation() methods?
   Answer:
     preventDefault(): preventDefault() কোনো element-এর ডিফল্ট আচরণ (default action) বন্ধ করে দেয়। <a href='...> ক্লিক করলে সাধারণত নতুন পেজ ওপেন হয়  preventDefault()
     দিলে পেজ ওপেন হবে না। <form> সাবমিট করলে সাধারণত পেজ reload হয় - preventDefault() দিলে reload হবে না।


