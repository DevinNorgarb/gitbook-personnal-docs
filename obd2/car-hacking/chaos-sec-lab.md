# Chaos-Sec-Lab

## [Chaos-Sec-Lab](https://chaos-lab.blogspot.com/)

### 2023年10月20日星期五

#### Grand Theft Auto – RF Locks Hacking Flipper-Zero Edition Part 1

<br>

0x00. INTRODUCTION

I believe when people are new to hacking RF locks system. One of the most common questions they will ask is which tools they will need. Usually I would say HackRF is a must to have tool. Up recently, the Flipper-Zero became one of the most popular gadgets among RF hackers. To be honest, the first time I heard about Flipper-Zero, I was not that impressed. I already owned a bunch of wireless hacking tools, such as Proxmark3, Yardstick1 and HackRF-Portapack. Why should we get another toy that provides similar functions? Soon I learned that I was wrong about it. For instance, other than its rich wireless capability, Flipper-Zero has also provided extendable external modules through the GPIO ports. This feature made the Flipper-Zero become a LEGO of hackers ;)

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfr7b-Bb_7AEUGAV-0E7nVjQKt0lDKASHrLMJirXVVh6O36DhSzYjbjTWAX0bijEuvn7fz3Ht_xR-E29UX27a9N5Heo5mCW5Xg_zhrsKREdKh1nNqc110oduI-w4i6UFqikk13nGuAUr_Imy8XR-VgTNvI5hNVgAPXjKaNlTlUkE4Dfo05EfgDYxz43hZw/w375-h251/%E5%9B%BE%E7%89%87_0880c08b0110f4eda527.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfr7b-Bb_7AEUGAV-0E7nVjQKt0lDKASHrLMJirXVVh6O36DhSzYjbjTWAX0bijEuvn7fz3Ht_xR-E29UX27a9N5Heo5mCW5Xg_zhrsKREdKh1nNqc110oduI-w4i6UFqikk13nGuAUr_Imy8XR-VgTNvI5hNVgAPXjKaNlTlUkE4Dfo05EfgDYxz43hZw/s5120/%E5%9B%BE%E7%89%87_0880c08b0110f4eda527.jpg)

&#x20;   (After 2-hours long wait in the queue, I finally got one at DEFCON31)

This article serves as a beginner’s RF lock system hacking journey, performing lock hacking with Flipper-Zero and other RF hacking tools. I hope each case study will help people get a better idea of what they would need for hacking RF locks.

<br>

0x01. SIGNAL JAMMING &#x20;

One of the easiest yet effective RF attack techniques called signal jamming. The attacker is constantly sending noise signals at that same frequency channel as the target, hoping to jam the original signal to achieve interference. Jamming essentially disrupts communication between two or more devices by shouting louder. It does not matter what to shout, as long as others cannot hear you.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhW0YVb2-rB2umQehjHD4Vs4qP5FNtwjeu3eRJJCqokuX3ZYH472dKWpKAewr_2bkfsUayZdMEECqWGSxnHoKnoMa_gB5GRmxbg7kcP1qYqiVaR82hs9H54yVITiLOkKJQaJeyv5BFp6HTdxdHksrBBsPDgz_JJlRiNoSzpAQuJf5reKd0OZlVoAFJ8uOXP/w398-h224/gpsjam_jammed.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhW0YVb2-rB2umQehjHD4Vs4qP5FNtwjeu3eRJJCqokuX3ZYH472dKWpKAewr_2bkfsUayZdMEECqWGSxnHoKnoMa_gB5GRmxbg7kcP1qYqiVaR82hs9H54yVITiLOkKJQaJeyv5BFp6HTdxdHksrBBsPDgz_JJlRiNoSzpAQuJf5reKd0OZlVoAFJ8uOXP/s1252/gpsjam_jammed.jpg)

&#x20;   (Jamming signals on the spectrum diagram)

Jamming attacks against car locks are also one of thieves' favorites. Criminals use hidden jamming equipment to prevent car owners from locking their cars. Once car owners leave, they can easily open the car door and steal the belongings left inside the car. Although signal jamming is not a new concept, it continues to grow in popularity among criminals, as the technology used becomes more sophisticated and easily accessible.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0TkM0j-x2bLEH9gDzN0jDryZKA1NCsdnJM3KluuoYjYWOZpqeHMA3zskgAZ8U0DAjiZR-3jG2lwq0I9G4Iw52SsrZs96p254rXDILcRk7eF_UYsaf98MGN_5EBcmXULmzz3EdpeSqChkybApsObwOATu-AhJMXf4niBPxW8jT5cHq6oBFyVQMus1-HrMn/w436-h271/222.JPG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0TkM0j-x2bLEH9gDzN0jDryZKA1NCsdnJM3KluuoYjYWOZpqeHMA3zskgAZ8U0DAjiZR-3jG2lwq0I9G4Iw52SsrZs96p254rXDILcRk7eF_UYsaf98MGN_5EBcmXULmzz3EdpeSqChkybApsObwOATu-AhJMXf4niBPxW8jT5cHq6oBFyVQMus1-HrMn/s544/222.JPG)

Below is a video demonstration of the car jamming attack with HackRF. As you can see in the video below how effective the attack is. Please ensure the car door is securely locked before you leave.<br>

Although Flipper Zero comes with certain regional and frequency restrictions, by installing a custom firmware (Xtreme) can bypassed this limit. This made Flipper-Zero perfect for experimenting with the jamming attack.&#x20;

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaIHxqJzmE2VBIz0P1sM1ogadJCCzN2PJkM_W2lY9CbLYMw7I-pSvbhqiYoORcL647w6R8mMKsPvA7hZuujMnXicn5sO4hLdprxhS0DhCXzSADfINWxcVkf5cnEyTea7ervwBsSMUq5LPTRB_NG2vwgsGBzEPYe5CRcEzM6bjl1kToxQAOtZ8zBOPZJrxd/w347-h280/Zero%20Jamming.JPG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaIHxqJzmE2VBIz0P1sM1ogadJCCzN2PJkM_W2lY9CbLYMw7I-pSvbhqiYoORcL647w6R8mMKsPvA7hZuujMnXicn5sO4hLdprxhS0DhCXzSADfINWxcVkf5cnEyTea7ervwBsSMUq5LPTRB_NG2vwgsGBzEPYe5CRcEzM6bjl1kToxQAOtZ8zBOPZJrxd/s994/Zero%20Jamming.JPG)

&#x20;  (Source from @McSHUR1KEN)

<br>

0x02. SIGNAL REPLAY BLINDLY&#x20;

Of course, it would be cooler if we can control the target. The replay attack is one of the oldest tricks from the book that can achieve exactly that. Since most RF lock system operating frequency is at 315 MHz or 433 MHz range, and some of them still use fixed-code mechanism. Meaning we can just leave the capture device near the target and wait patiently. If lucky enough we will be able to catch the unlock signal for a later replay.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhy1SCS3BMQ1u7NrsiuW1aCYTb6uaqvu_5yTnUJDZfJOTUa3grv8Kp5rY87yHstmSdDmNLnyJSnMjo3nBxHaLEsiMJfB8jT2qt9piTM85TLy4p18PhJG3RRP-orZAAhx1FjhP3AJ8-eGlM6RdjgOvwPXT3YtYd6SotpGmxAqwVtpFJwUpCzqsp3dOVe9wKq/w442-h256/111.JPG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhy1SCS3BMQ1u7NrsiuW1aCYTb6uaqvu_5yTnUJDZfJOTUa3grv8Kp5rY87yHstmSdDmNLnyJSnMjo3nBxHaLEsiMJfB8jT2qt9piTM85TLy4p18PhJG3RRP-orZAAhx1FjhP3AJ8-eGlM6RdjgOvwPXT3YtYd6SotpGmxAqwVtpFJwUpCzqsp3dOVe9wKq/s594/111.JPG)

This is a lot like fishing, but the reward is unlock signal instead. Below is a video demonstration of the replay attack with HackRF. As you can see in the video below, it works as a charm.

Interestingly for Tesla’s charging port, it still uses a fixed-code mechanism. People can download the pre-recorded Tesla Charge Port files to the Flipper-Zero, and messing with other Tesla vehicle owners, yet not knowing what is really going on behind the scenes.&#x20;

(Source from @takeapart)

<br>

0x03. SIGNAL REPLAY ANALYZE

Only blindly replaying the signal is not going to satisfy the Hackers. Unlike the jamming attacks, if we like to get to know our target better, we need to find out the target frequency, encoding method, chip model, etc. For example, we can learn the operating frequency by using the Frequency Analyzer application provided by Flipper-Zero.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBkMlMSDjBhEB05jAcTRICFbQdOsw-P_LJOhdFN9OBwrbgMoBePLhO4Lr522Uxhzibw0m73su_2MAZuy6778hugdxn-ULywAuhxQ1OexdK1VhZ0wJp1emZ1nKp5kB3_tl4HG1oH0L5GF64ewSrgu3FP-u8zgMasxNEHuHRUXu_Wi6bCArOdQkKS68W2sIS/w359-h212/%E5%9B%BE%E7%89%87_0880c08b0110f5f78327.JPG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBkMlMSDjBhEB05jAcTRICFbQdOsw-P_LJOhdFN9OBwrbgMoBePLhO4Lr522Uxhzibw0m73su_2MAZuy6778hugdxn-ULywAuhxQ1OexdK1VhZ0wJp1emZ1nKp5kB3_tl4HG1oH0L5GF64ewSrgu3FP-u8zgMasxNEHuHRUXu_Wi6bCArOdQkKS68W2sIS/s547/%E5%9B%BE%E7%89%87_0880c08b0110f5f78327.JPG)\
Alternatively, do an old school way by disassemble the keyfob and investigating the PCB. Here we see the IC chip model (CMT2150L) and a component crystal (26.250M) on an E-Scooter Keyfob. By checking the datasheet, we can found the operating frequency. The encoder is 1527. Most importantly the pinout diagram of the CMT2150L chip.[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwiB0PvPlnKGljkEKgemPWJ4nIKUtP3hyphenhypheny1HDHffDXggRI1SOcJjePGnLQx5ewR1HeUByZgePtQ2jFrVsZixDcT3EJ4f6Qdzpe285gpbekBC9T5fOfNHV6nInuu2hdAFbdC2w0l5w6JQV71iwYT5yZtOV9ohbC7Labdy3to9P0dKMgqOUm-qE8CCVqgyBN/w391-h266/%E5%9B%BE%E7%89%87_0880c08b0110f6cee821.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwiB0PvPlnKGljkEKgemPWJ4nIKUtP3hyphenhypheny1HDHffDXggRI1SOcJjePGnLQx5ewR1HeUByZgePtQ2jFrVsZixDcT3EJ4f6Qdzpe285gpbekBC9T5fOfNHV6nInuu2hdAFbdC2w0l5w6JQV71iwYT5yZtOV9ohbC7Labdy3to9P0dKMgqOUm-qE8CCVqgyBN/s1080/%E5%9B%BE%E7%89%87_0880c08b0110f6cee821.jpg)\
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_EhJ35x3_WjPRiqrFHxrr1m423cpqOQ9N6M3IWN6W0aHxIzPHBxQ7LSSZhigY1pO9VoeRXCvEVjyy1MSRcrb953QyI4xa70PVZoT2jvmwot9zljxzfQI8EOwytVVL1qqAoRMZPkD4_Utv3wxDWM5WZsVi4mm_lsDtANZwgOhNSL6rDxa0fBxg_nYz_HHS/w392-h215/%E5%9B%BE%E7%89%87_0880c08b0110f6ce8826.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_EhJ35x3_WjPRiqrFHxrr1m423cpqOQ9N6M3IWN6W0aHxIzPHBxQ7LSSZhigY1pO9VoeRXCvEVjyy1MSRcrb953QyI4xa70PVZoT2jvmwot9zljxzfQI8EOwytVVL1qqAoRMZPkD4_Utv3wxDWM5WZsVi4mm_lsDtANZwgOhNSL6rDxa0fBxg_nYz_HHS/s1080/%E5%9B%BE%E7%89%87_0880c08b0110f6ce8826.jpg)\
Once we connect the correct pins on IC to an oscilloscope and press the unlock button on the keyfob, the data pulse of the unlock signal will be present in front of us. To make analyzing jobs easier, we can use a software called RTL\_433 to capture the raw data generated by this E-Bike keyfob by wireless.[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhddHVIQzDFkIyM207vLAh8pvHW_rkU6N4IlpKiMxMwGL-kJL1ZQxdGZCAn1SxyhDEHRdJzPtkyLnYGuCm0ucD6H10kSSleZm5HFg4PFBVBGHnf8Qu6o3limjmGMux05cuc5p-mdsvXCrxcokyjbiy4X7XAPA9NoBGloDXUS2sxemf1UGQTXyyhpmQ4b6PR/w369-h275/%E5%9B%BE%E7%89%87_0880c08b0110f6ce8823.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhddHVIQzDFkIyM207vLAh8pvHW_rkU6N4IlpKiMxMwGL-kJL1ZQxdGZCAn1SxyhDEHRdJzPtkyLnYGuCm0ucD6H10kSSleZm5HFg4PFBVBGHnf8Qu6o3limjmGMux05cuc5p-mdsvXCrxcokyjbiy4X7XAPA9NoBGloDXUS2sxemf1UGQTXyyhpmQ4b6PR/s1080/%E5%9B%BE%E7%89%87_0880c08b0110f6ce8823.jpg)\
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZGPBSB4T7oc9B84UEMvFFR5b-UvSEUTvmI2_f5c3UZYEXKizZA-QHj2JDNXh0fgR9SXBvXFVjRZM-bn7UY5iG9rfa-RGELUDnzr3JgBufzEfeE8hNgV88VKS_6OIQIRa0fPkhZqrVohAHeexhMN9bjtASZigdG1drcuH1NK0ym_TrsgtbajE08UOQ03mF/w368-h127/%E5%9B%BE%E7%89%87_0880c08b0110f6ce8824.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZGPBSB4T7oc9B84UEMvFFR5b-UvSEUTvmI2_f5c3UZYEXKizZA-QHj2JDNXh0fgR9SXBvXFVjRZM-bn7UY5iG9rfa-RGELUDnzr3JgBufzEfeE8hNgV88VKS_6OIQIRa0fPkhZqrVohAHeexhMN9bjtASZigdG1drcuH1NK0ym_TrsgtbajE08UOQ03mF/s984/%E5%9B%BE%E7%89%87_0880c08b0110f6ce8824.jpg)\
Since the lock system of this E-Scooter again relies on the fixed-code, we can simply use Flipper-Zero to unlock it as you can see in the video below.<br>

(Source from a good amigo)

<br>

0x04. SIGNAL REPLAY BRUTEFORCE

Have you ever wondered if those fixed-code lock systems are bruteforceable? Here is an interesting lock; it comes with 8 DIP switches on both the lock and keyfob side, we can switch up, center and down to have different combinations.&#x20;

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsBJWkjIOaZnogDZSkrTa-ymFJKbz_NItObN2DjscqZkrbyOIhWajQA305Qe3Ccy4liGcRmyM3PuIRpXk539g0K0VyU99zkRBXw8kFAG_vG5CgrO2yI5VtFSshdRbKryHl8iGO1V2pkg4-6vB7lnltM5xj8_0wNhEwV23J3o2di02u1RYm_p8gRtmWFnCq/w371-h169/937445_D8ADZEH82JYJFTG.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsBJWkjIOaZnogDZSkrTa-ymFJKbz_NItObN2DjscqZkrbyOIhWajQA305Qe3Ccy4liGcRmyM3PuIRpXk539g0K0VyU99zkRBXw8kFAG_vG5CgrO2yI5VtFSshdRbKryHl8iGO1V2pkg4-6vB7lnltM5xj8_0wNhEwV23J3o2di02u1RYm_p8gRtmWFnCq/s606/937445_D8ADZEH82JYJFTG.jpg)\
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNKW6raOTeHoureeoIwAo-jCUZTw6dlUAJiSYRhhpGZ6z0YE8MdtZ4OiL2n_kwBnwOqJL2d2l4jgIyh-HlZwnUS-I1Fk_bcfso0rlpoeqipbTCraBGBfHfVd3lrvt5ObaO2irrw1QD4eOnxAWHrNx-YtQwQKGucOUVChJm8sNdab51fDU6FzjP0K-BU_lg/w370-h171/937445_72YKXY757XESVNJ.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNKW6raOTeHoureeoIwAo-jCUZTw6dlUAJiSYRhhpGZ6z0YE8MdtZ4OiL2n_kwBnwOqJL2d2l4jgIyh-HlZwnUS-I1Fk_bcfso0rlpoeqipbTCraBGBfHfVd3lrvt5ObaO2irrw1QD4eOnxAWHrNx-YtQwQKGucOUVChJm8sNdab51fDU6FzjP0K-BU_lg/s578/937445_72YKXY757XESVNJ.jpg)\
By using the Flipper-Zero we are able to tell this lock is based on Princeton. We also can use app Pulse Plotter from Flipper-Zero to analyzing the signal. However, I would like to recommend a software designed for reversing wireless signal called Universe Radio Hacker to do the job. URH is a complete suite for wireless protocol investigation. URH allows easy demodulation of signals combined with an automatic detection of modulation parameters making it a breeze to identify the bits and bytes that fly over the air.\
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVaDXQfvmxO6ZfZ3pNHJZpOzX3Jk5tvBlnC4jFP-8N3jESe-LqTMW0RQa_OG-lYcGf7FYkLdrWF2yx4_bXaWAofijr79vSZ3r30IZepxUxuhSfVA_eyER-EgcOnMvanbR10qYzHr60QBaqhXzeY_-l4VNL84cyd-_Cj3fTdVTPDGVSkqCKkGXl2g4cQS1U/w376-h282/%E5%9B%BE%E7%89%87_0880c08b0110f6d4e921.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVaDXQfvmxO6ZfZ3pNHJZpOzX3Jk5tvBlnC4jFP-8N3jESe-LqTMW0RQa_OG-lYcGf7FYkLdrWF2yx4_bXaWAofijr79vSZ3r30IZepxUxuhSfVA_eyER-EgcOnMvanbR10qYzHr60QBaqhXzeY_-l4VNL84cyd-_Cj3fTdVTPDGVSkqCKkGXl2g4cQS1U/s1706/%E5%9B%BE%E7%89%87_0880c08b0110f6d4e921.jpg)\
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdTmHLSgdQUcHSREvN-xrrNDmMU0a6DSZ9JZM_T-Bie1tHEhyphenhyphenElSRvU1u4uRSl52TO3est3G8bMFhC94kYuEQivWLWsP19nuZAljN_SjJZ7PuwiQYKwJ8dWGXau-S_m8cLzuBwpsdfbVSVs7hyfQfzhZV_wa3GN3ApawqgqigOJfAlWH4Kx-DVQmGpacx4/w476-h125/937445_AFJYG87VKF27SYE.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdTmHLSgdQUcHSREvN-xrrNDmMU0a6DSZ9JZM_T-Bie1tHEhyphenhyphenElSRvU1u4uRSl52TO3est3G8bMFhC94kYuEQivWLWsP19nuZAljN_SjJZ7PuwiQYKwJ8dWGXau-S_m8cLzuBwpsdfbVSVs7hyfQfzhZV_wa3GN3ApawqgqigOJfAlWH4Kx-DVQmGpacx4/s574/937445_AFJYG87VKF27SYE.jpg)\
After capturing the unlock signal from the keyfob, the fixed code contents can be easily analyzed with URH. Since the DIP switch only 3^8 combination. It is very easy to brute force all 6561 combinations through the Fuzzing function of URH. As you can see in the video below.\
A person called Hong5489 has implemented the brute force sub files for Flipper-Zero. You can get sub files from his github. One thing need to be careful though is that when he tries to brute force his own gate, accidentally opens the neighbors gate.[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4sOlycHbXTHWqTsarjFU5gaAxIo2mFs0E-zHgeEEbmj7GqjtSb4edA4TPrnhTsRhszlQBqvg9umaLKh4cwDAPG_u8DuD0Ff5RV8QMEsA_ObKX_TA3eCh6g8Zk0dDfYKcHsfkdzMJyai_D7_IazTbtpxCXSQ9V1m1HSGqIRMPHbeo5npvWpd94paFVsd7b/w510-h207/Zero-BruteForce.JPG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4sOlycHbXTHWqTsarjFU5gaAxIo2mFs0E-zHgeEEbmj7GqjtSb4edA4TPrnhTsRhszlQBqvg9umaLKh4cwDAPG_u8DuD0Ff5RV8QMEsA_ObKX_TA3eCh6g8Zk0dDfYKcHsfkdzMJyai_D7_IazTbtpxCXSQ9V1m1HSGqIRMPHbeo5npvWpd94paFVsd7b/s641/Zero-BruteForce.JPG)<br>

0x05. SUMMARY

In this article, we have looked at the common methods of RF Locks hacking. In Part2, we are going to look at more advanced and interesting RF Locks hacking techniques. Stay tuned.

<br>

<br>
