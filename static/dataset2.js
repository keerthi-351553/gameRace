
var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var explanation = new Array();

// To add more questions, just follow the format below.

questions[12] = "The culture of lean gives a lot of importance to";
choices[12] = new Array();
choices[12][0] = "Innovation";    
choices[12][1] = "Capability Building";
choices[12][2] = " Questioning Status ";
choices[12][3] = "Showcasing best practices";
answers[12] = 3;
explanation[12] = " Questioning Status ";

questions[1] = "When should I start implementing lean principles?";
choices[1] = new Array();
choices[1][0] = "When Organization mandates";
choices[1][1] = "When there is a problem in the project";
choices[1][2] = "When project gets kicked off";
choices[1][3] = "None of the above";
answers[1] = 3;
explanation[1] = " When project gets kicked off ";

questions[2] = "Which phase of the project lean can be implemented";
choices[2] = new Array();
choices[2][0] = "Requirement phase";
choices[2][1] = "Design Phase";
choices[2][2] = "CUT   & ST Phase";
choices[2][3] = "All of the above";
answers[2] = 4;
explanation[2] = " All of the above ";

questions[3] = "Management Decisions in a company implementing lean are based on";
choices[3] = new Array();
choices[3][0] = "Waste Elimination";
choices[3][1] = "Short Term financial gains";
choices[3][2] = " Long term thinking even at short term financial expense";
choices[3][3] = "Medium term thinking but with high operating margins.";
answers[3] = 3;
explanation[3] = " Long term thinking even at short term financial expense ";

questions[4] = "Following are two key pillars of Toyota Production System ?";
choices[4] = new Array();
choices[4][0] = "Just-in-Time and Waste Elimination";
choices[4][1] = " Jidoka and Just in Time";
choices[4][2] = "Visual Management and Kaizen";
choices[4][3] = "Standardisation and Leveled Production";
answers[4] = 2;
explanation[4] = " Jidoka and Just in Time";

questions[5] = "Lean does not advocate use of a technology which are thoroughly tested and proven.";
choices[5] = new Array();
choices[5][0] = " False";
choices[5][1] = "TRUE";
choices[5][2] = "None of the above";
choices[5][3] = "No idea";
answers[5] = 1;
explanation[5] = " False";

questions[6] = "Lean advocates make decisions fast, so that more time can be spent on implementation.";
choices[6] = new Array();
choices[6][0] = "True";
choices[6][1] = " FALSE";
choices[6][2] = "None of the above";
choices[6][3] = "No idea";
answers[6] = 2;
explanation[6] = " False";

questions[7] = "Lean is a philosophy  that  shortens  the  timeline between  the  customer  order  and  the  shipment  by  eliminating  waste";
choices[7] = new Array();
choices[7][0] = " True";
choices[7][1] = "FALSE";
choices[7][2] = "None of the above.";
choices[7][3] = "No idea";
answers[7] = 1;
explanation[7] = " True";

questions[8] = "How many lean principles are there according to Jeffrey Liker as presented in The Toyoto Way";
choices[8] = new Array();
choices[8][0] = "5";
choices[8][1] = "10";
choices[8][2] = "14";
choices[8][3] = "None of the above";
answers[8] = 3;
explanation[8] = " 14";

questions[9] = "Mass production and Batch production are in line with Lean thinking.";
choices[9] = new Array();
choices[9][0] = "False";
choices[9][1] = "TRUE";
choices[9][2] = "None of the above";
choices[9][3] = "No idea";
answers[9] = 1;
explanation[9] = "The right answer is True";

questions[10] = "According to Lean thinking, problems should be addressed at";
choices[10] = new Array();
choices[10][0] = "Root Cause level   ";
choices[10][1] = "Manager level     ";
choices[10][2] = "Operator level   ";
choices[10][3] = "All the above   ";
answers[10] = 1;

explanation[10] = "Root Cause level";


questions[11] = "The slowest operation in a process.";
choices[11] = new Array();
choices[11][0] = "Work stopper";    
choices[11][1] = "Bottleneck";
choices[11][2] = "Both 1 and 2";
choices[11][3] = "None";
answers[11] = 2;
explanation[11] = "Bottleneck";

questions[13] = "What is Hansei              ";
choices[13] = new Array();
choices[13][0] = " Reflection     ";    
choices[13][1] = "Refraction       ";
choices[13][2] = "Retraction       ";
choices[13][3] = "Renovation       ";
answers[13] = 1;
explanation[13] = "Reflection";

questions[14] = "Problems should not remain hidden. They should be ------- early.";
choices[14] = new Array();
choices[14][0] = "Standardized    ";    
choices[14][1] = "Optimized   ";
choices[14][2] = " Surfaced";
choices[14][3] = "All the above";
answers[14] = 3;
explanation[14] = " Surfaced";


questions[15] = "To improve a process we must first observe and understand it. ";
choices[15] = new Array();
choices[15][0] = "FALSE        ";    
choices[15][1] = " True        ";
choices[15][2] = "None of the above";
choices[15][3] = "No idea       ";
answers[15] = 2;
explanation[15] = " True";

questions[16] = "Standardized work and environment are the basis for         ";
choices[16] = new Array();
choices[16][0] = "Continuous improvement         ";    
choices[16][1] = "Defect prevention                 ";
choices[16][2] = "Both 1 and 2          ";
choices[16][3] = "None                   ";
answers[16] = 1;
explanation[16] = " Continuous improvement";

questions[17] = "Operating model with in-station quality is found in";
choices[17] = new Array();
choices[17][0] = "Mass production approach                 ";    
choices[17][1] = " Toyota production system                ";
choices[17][2] = "Both 1 and 2                              ";
choices[17][3] = "None                                   ";
answers[17] = 2;
explanation[17] = "Toyota production system";

questions[18] = "Lean is                  ";
choices[18] = new Array();
choices[18][0] = "Action Oriented";    
choices[18][1] = "Continuous Improvement";
choices[18][2] = "Process toolkit ";
choices[18][3] = "All the above";
answers[18] = 4;
explanation[18] = " All the above   ";

questions[19] = "Lean is not a     ";
choices[19] = new Array();
choices[19][0] = "Problem Solver     ";    
choices[19][1] = "Action Oriented       ";
choices[19][2] = "Continuous improvement   ";
choices[19][3] = "Short term gain   ";
answers[19] = 4;
explanation[19] = " Short term gain     ";


questions[20] = "TPS is an integrated Socio-technical system, developed by    ";
choices[20] = new Array();
choices[20][0] = "Ford             ";    
choices[20][1] = " Toyota            ";
choices[20][2] = "Wipro              ";
choices[20][3] = "IBM                  ";
answers[20] = 2;
explanation[20] = "Toyota       ";

questions[21] = "Genchi Genbatsu is part of category in Liker's 14 principle model";
choices[21] = new Array();
choices[21][0] = "Process";    
choices[21][1] = " People and Partners";
choices[21][2] = " Problem Solving  ";
choices[21][3] = "Philosophy ";
answers[21] = 3;
explanation[21] = " Problem Solving       ";

questions[22] = "Understanding the actual situation   ";
choices[22] = new Array();
choices[22][0] = "Capacity Planning";    
choices[22][1] = " Mistake proofing ";
choices[22][2] = "5S   ";
choices[22][3] = "Go and see Yourself ";
answers[22] = 4;
explanation[22] = " Go and see Yourself       ";

questions[23] = "5 Ws of root cause analysis are ";
choices[23] = new Array();
choices[23][0] = "who, what, where, when, why. ";    
choices[23][1] = " what, where, when, who, why. ";
choices[23][2] = "who, who, who, who, who.  ";
choices[23][3] = "why, why, why, why, why.";
answers[23] = 4;
explanation[23] = " why, why, why, why, why.       ";


questions[24] = "In  5 Why analysis, if the root cause is not identified at the 5th Why, one should …. ";
choices[24] = new Array();
choices[24][0] = "stop";    
choices[24][1] = " start afresh";
choices[24][2] = " Continue   ";
choices[24][3] = "None";
answers[24] = 3;
explanation[24] = " Continue         ";

questions[25] = "Identify the applicable tenet used for identifying the root cause  of the problem";
choices[25] = new Array();
choices[25][0] = "5S           ";    
choices[25][1] = " Statistical analysis         ";
choices[25][2] = "5 WHY                ";
choices[25][3] = "PDCA              ";
answers[25] = 3;
explanation[25] = " 5 WHY           ";

questions[26] = "Which one is not part of 5S?    ";
choices[26] = new Array();
choices[26][0] = "Sort ";    
choices[26][1] = " Sustain ";
choices[26][2] = "Shine  ";
choices[26][3] = " Sequence";
answers[26] = 4;
explanation[26] = " Sequence           ";

questions[27] = "Placing everything in its place is part of  _________________in 5S framework  ";
choices[27] = new Array();
choices[27][0] = "Sort";    
choices[27][1] = "  Straighten ";
choices[27][2] = "Shine   ";
choices[27][3] = "Sustain  ";
answers[27] = 2;
explanation[27] = "Straighten           ";

questions[28] = "Identifying the necessary and removing unwanted one in any workplace is called  ";
choices[28] = new Array();
choices[28][0] = "Straighten            ";    
choices[28][1] = " Automation           ";
choices[28][2] = "Mistake proofing       ";
choices[28][3] = " Sort                 ";
answers[28] = 4;
explanation[28] = " Sort          ";

questions[29] = "Principles of 5S aims at achieving     ";
choices[29] = new Array();
choices[29][0] = " efficient work place    ";    
choices[29][1] = " Jidoka    ";
choices[29][2] = "Efficient Task switching ";
choices[29][3] = " None";
answers[29] = 1;
explanation[29] = " efficient work place           ";

questions[30] = "What are the 5 STEPS of 5S? ";
choices[30] = new Array();
choices[30][0] = "Shine, Solve, Sustain, Sort, Standardize   ";    
choices[30][1] = " Sustain, Sort, Standardize, Set, Shine   ";
choices[30][2] = " Sort, Straighten, Shine, Standardize, Sustain    ";
choices[30][3] = " Sort, Sustain, Sushi, Shine, Standardize ";
answers[30] = 3;
explanation[30] = " Sort, Straighten, Shine, Standardize, Sustain           ";


questions[31] = "Which of the tenet is used for work place management";
choices[31] = new Array();
choices[31][0] = "SMED                 ";    
choices[31][1] = "5S                   ";
choices[31][2] = "VSM                  ";
choices[31][3] = "DSM                    ";
answers[31] = 2;
explanation[31] = "5S           ";

questions[32] = "The culture of stopping when there is a quality problem is called?";
choices[32] = new Array();
choices[32][0] = "Waste elimination      ";    
choices[32][1] = " Standardisation     ";
choices[32][2] = "Jidoka      ";
choices[32][3] = "None of the above ";
answers[32] = 3;
explanation[32] = " Jidoka            ";


questions[33] = "This technique involves simple inexpensive automatic mechanisms or manual inspection in station that makes quality issues obviuos at a glance.       ";
choices[33] = new Array();
choices[33][0] = "Visual Control     ";    
choices[33][1] = "  Value Steam Mapping     ";
choices[33][2] = "  both 1 and 2      ";
choices[33][3] = "  Poka Yoke ";
answers[33] = 4;
explanation[33] = "  Poka Yoke           ";


questions[34] = " Poka Yoke is --------------------------- ";
choices[34] = new Array();
choices[34][0] = " Mistake Proofing     ";    
choices[34][1] = "  Visual Control     ";
choices[34][2] = "  Standarization      ";
choices[34][3] = "  None of above   ";
answers[34] = 1;
explanation[34] = " Mistake Proofing          ";


questions[35] = " In TPS  high levels of quality is achieved by the principles of ";
choices[35] = new Array();
choices[35][0] = " Jidoka     ";    
choices[35][1] = "  Poka Yoke     ";
choices[35][2] = "   Both 1 and 2      ";
choices[35][3] = "  None of above   ";
answers[35] = 3;
explanation[35] = "  Both 1 and 2           ";

questions[36] = " Andon is an example of Jidoka       ";
choices[36] = new Array();
choices[36][0] = "  True     ";    
choices[36][1] = "  FALSE     ";
choices[36][2] = "None of the above        ";
choices[36][3] = "    No idea ";
answers[36] = 1;
explanation[36] = "  True           ";

questions[37] = " Mechanisms other than inspection at a work place to achieve in station quality by prevention is ";
choices[37] = new Array();
choices[37][0] = "  Jidoka     ";    
choices[37][1] = "  Heijunka     ";
choices[37][2] = "     Poka Yoke    ";
choices[37][3] = "   All the above  ";
answers[37] = 3;
explanation[37] = "  Poka Yoke           ";

questions[38] = " Use of code analysis tools as the code is developed is an example of        ";
choices[38] = new Array();
choices[38][0] = "  Concurrent Engineering    ";    
choices[38][1] = "   In station quality    ";
choices[38][2] = "    first things first    ";
choices[38][3] = "  None   ";
answers[38] = 2;
explanation[38] = "  In station quality            ";

questions[39] = " Automatically stopping the process when something is wrong and then fixing the problems on the line itself as they occur is called        ";
choices[39] = new Array();
choices[39][0] = "  Heijunka    ";    
choices[39][1] = "    Jidoka   ";
choices[39][2] = "    Kaizen    ";
choices[39][3] = "  Kanban   ";
answers[39] = 2;
explanation[39] = "  Jidoka           ";

questions[40] = " Kanban is synonymous with Pull systems.True or False        ";
choices[40] = new Array();
choices[40][0] = "   TRUE    ";    
choices[40][1] = "   FALSE    ";
choices[40][2] = "  None of the above    ";
choices[40][3] = "  No idea  ";
answers[40] = 1;
explanation[40] = "    TRUE            ";


questions[41] = " Pull system helps in avoiding -----------------------        ";
choices[41] = new Array();
choices[41][0] = "   Over production   ";    
choices[41][1] = "   Slow production    ";
choices[41][2] = "    fast production  ";
choices[41][3] = "  None of above  ";
answers[41] = 1;
explanation[41] = " Over production            ";

questions[42] = " Creation of Level schedule by sequencing orders in order to smoothen the demand        ";
choices[42] = new Array();
choices[42][0] = "    Heijunka   ";    
choices[42][1] = "   Gemba    ";
choices[42][2] = "    Kaizen  ";
choices[42][3] = "  Hoshin Kanri  ";
answers[42] = 1;
explanation[42] = "    Heijunka             ";

questions[43] = " No upstream should produce anything till downstream asks for it is a part of which lean principle        ";
choices[43] = new Array();
choices[43][0] = "   Poka- yoke   ";    
choices[43][1] = "   DSM    ";
choices[43][2] = "    Push Mechanism  ";
choices[43][3] = "  Pull mechanism  ";
answers[43] = 4;
explanation[43] = "   Pull mechanism            ";

questions[44] = " One piece flow is synonym  for Pull system.True or False        ";
choices[44] = new Array();
choices[44][0] = "    True   ";    
choices[44][1] = "   FALSE    ";
choices[44][2] = "   None of the above   ";
choices[44][3] = " No idea   ";
answers[44] = 1;
explanation[44] = "   True              ";

questions[45] = " Multi skilled team members help improve the flow of requests (Value).       ";
choices[45] = new Array();
choices[45][0] = "   FALSE   ";    
choices[45][1] = "   True   ";
choices[45][2] = "   None of the above   ";
choices[45][3] = "  No idea  ";
answers[45] = 2;
explanation[45] = "   True              ";

questions[46] = " Work load variability leads to overburden of man and machine       ";
choices[46] = new Array();
choices[46][0] = "    True   ";    
choices[46][1] = "   FALSE   ";
choices[46][2] = "  None of the above     ";
choices[46][3] = "   No idea ";
answers[46] = 1;
explanation[46] = "   True              ";

questions[47] = "In a maintenance project of release cycle in 3 months, first six weeks the team idles due to lack of clarity. The customer expects team to put in the planned efforts in the remaining 6 weeks. This will lead to -----------.";
choices[47] = new Array();
choices[47][0] = "    Task Switching   ";    
choices[47][1] = "   Overload ";
choices[47][2] = "   Poor quality   ";
choices[47][3] = "   both 2 and 3  ";
answers[47] = 4;
explanation[47] = "  both 2 and 3              ";

questions[48] = " Use ………  to reduce setup/changeover time        ";
choices[48] = new Array();
choices[48][0] = "    5S   ";    
choices[48][1] = "    SMED   ";
choices[48][2] = "   RCA   ";
choices[48][3] = "  VSM  ";
answers[48] = 2;
explanation[48] = "   SMED              ";

questions[49] = " Issue log or KEDB helps in               ";
choices[49] = new Array();
choices[49][0] = "    Standardization              ";    
choices[49][1] = "   Automation                      ";
choices[49][2] = "   VSM                               ";
choices[49][3] = "  Competency management            ";
answers[49] = 1;
explanation[49] = "  Standardization               ";

questions[50] = " PM defines the coding standard for a new technology before the development work. Based on these guidelines, he also re configures the code review tool. Choose the Lean tenets PM has applied     ";
choices[50] = new Array();
choices[50][0] = "     Standardization & Mistake proofing   ";    
choices[50][1] = "   Standardization & Statistical Analysis   ";
choices[50][2] = "   Only Standardization   ";
choices[50][3] = "   5S and Mistake proofing ";
answers[50] = 1;
explanation[50] = "   Standardization & Mistake proofing               ";

questions[51] = " To reduce test set-up change over time, you considered SMED technique. Which of the following principles can help?";
choices[51] = new Array();
choices[51][0] = "     Displace  ";    
choices[51][1] = "   Eliminate   ";
choices[51][2] = "   Standardize   ";
choices[51][3] = "    All of the above ";
answers[51] = 4;
explanation[51] = "   All of the above               ";

questions[52] = " Test plan review check list is a example of standardization.    ";
choices[52] = new Array();
choices[52][0] = "      True    ";    
choices[52][1] = "   False   ";
choices[52][2] = "  None of the above    ";
choices[52][3] = " No idea  ";
answers[52] = 1;
explanation[52] = "    True               ";

questions[53] = " Tasks with clear specification on the input, process, time and out put are....     ";
choices[53] = new Array();
choices[53][0] = "     Fixed     ";    
choices[53][1] = "    standardized   ";
choices[53][2] = "   Designed    ";
choices[53][3] = "  All the above  ";
answers[53] = 2;
explanation[53] = "   standardized               ";

questions[54] = " Achieving predictability of the outcome and making it repeatable is achieved by  ..    ";
choices[54] = new Array();
choices[54][0] = "     Concurrent Engineering     ";    
choices[54][1] = "    Predictive Engineering   ";
choices[54][2] = "    Standardization  ";
choices[54][3] = "  All the above   ";
answers[54] = 3;
explanation[54] = "   Standardization              ";

questions[55] = " Standardization helps to reduce variance in       ";
choices[55] = new Array();
choices[55][0] = " Cycle time       ";    
choices[55][1] = "Quality     ";
choices[55][2] = "Both 1 and 2    ";
choices[55][3] = "None    ";
answers[55] = 3;
explanation[55] = "    Both 1 and 2             ";

questions[56] = " Deciding Factors of Automation are  ";
choices[56] = new Array();
choices[56][0] = " Feasibility   ";    
choices[56][1] = "  Return of Investment   ";
choices[56][2] = "  Frequency   ";
choices[56][3] = "   All the above ";
answers[56] = 4;
explanation[56] = "    All the above             ";

questions[57] = " Issue log or KEDB helps in    ";
choices[57] = new Array();
choices[57][0] = "  Standardization     ";    
choices[57][1] = "  Automation   ";
choices[57][2] = "  VSM    ";
choices[57][3] = "Competency management   ";
answers[57] = 1;
explanation[57] = "  Standardization             ";

questions[58] = " PM defines the coding standard for a new technology before the development work. Based on these guidelines, he also re configures the code review tool. Choose the Lean tenets PM has applied  ";
choices[58] = new Array();
choices[58][0] = "  Standardization & Mistake proofing   ";    
choices[58][1] = "  Standardization & Statistical Analysis   ";
choices[58][2] = "  Only Standardization   ";
choices[58][3] = "  5S and Mistake proofing ";
answers[58] = 1;
explanation[58] = "   Standardization & Mistake proofing             ";

questions[59] = " The rate (time per unit of value) at which work should proceed through a Value Stream     ";
choices[59] = new Array();
choices[59][0] = " Cycle Time    ";    
choices[59][1] = "  Activity Time   ";
choices[59][2] = "  Takt Time   ";
choices[59][3] = "   All the above ";
answers[59] = 3;
explanation[59] = "   Takt Time            ";

questions[60] = " Takt time is Net available time  to work DIVIDED BY  ";
choices[60] = new Array();
choices[60][0] = "Total Supply      ";    
choices[60][1] = "   Customer demand    ";
choices[60][2] = " Both      ";
choices[60][3] = "   None  ";
answers[60] = 2;
explanation[60] = "  Customer demand           ";



questions[61] = " Customer expects your team to test 10 features in 20 working days. What is takt time?  ";
choices[61] = new Array();
choices[61][0] = "10 features/month     ";    
choices[61][1] = "2 days/feature ";
choices[61][2] = "0.5 features/day     ";
choices[61][3] = "None of above ";
answers[61] = 3;
explanation[61] = " 0.5 features/day            ";

questions[62] = " Kaizen as implemented in Lean helps in the following ";
choices[62] = new Array();
choices[62][0] = " Ongoing improvement     ";    
choices[62][1] = "significant onetime improvement  ";
choices[62][2] = " Ongoing small changes suggested by external process consultant    ";
choices[62][3] = "  One time significant change suggested by external process consultant ";
answers[62] = 1;
explanation[62] = "  Ongoing improvement            ";

questions[63] = " Continuous organization learning and improvement is ensured through....  ";
choices[63] = new Array();
choices[63][0] = " Standardization and Automation     ";    
choices[63][1] = "  Retrospection and Mistakeproofing  ";
choices[63][2] = " Pull and Flow       ";
choices[63][3] = " Retrospection and Kaizen          ";
answers[63] = 4;
explanation[63] = " Retrospection and Kaizen             ";

questions[64] = " Kaizen applied with the right approach helps in achieving    ";
choices[64] = new Array();
choices[64][0] = " Quantum improvement      ";    
choices[64][1] = "Incremental improvement    ";
choices[64][2] = " Sustains the performance       ";
choices[64][3] = " Marginal improvement          ";
answers[64] = 2;
explanation[64] = " Incremental improvement             ";

questions[65] = " Kaizen can result in improvement in...   ";
choices[65] = new Array();
choices[65][0] = " Quality        ";    
choices[65][1] = "   Throughput   ";
choices[65][2] = "  Both 1 and 2        ";
choices[65][3] = " None         ";
answers[65] = 3;
explanation[65] = "  Both 1 and 2             ";

questions[66] = " A Visual Control device in the work area indicating a process or quality problem    ";
choices[66] = new Array();
choices[66][0] = "  Andon Board        ";    
choices[66][1] = "  SMED   ";
choices[66][2] = "  Both 1 and 2        ";
choices[66][3] = " None         ";
answers[66] = 1;
explanation[66] = " Andon Board              ";

questions[67] = " Main purpose of Visual control helps in      ";
choices[67] = new Array();
choices[67][0] = "Creating dashboards and metrics for measurement         ";    
choices[67][1] = " Problems are not hidden   ";
choices[67][2] = "Helps in base lining and measuring the trends ";
choices[67][3] = " Showcase to the management on the success stories of the team         ";
answers[67] = 2;
explanation[67] = " Problems are not hidden              ";

questions[68] = " What is the main purpose of visual control?      ";
choices[68] = new Array();
choices[68][0] = " To show status to upper management         ";    
choices[68][1] = " To show status to customer     ";
choices[68][2] = " To help people operating on the process stay on target  ";
choices[68][3] = " None of the above       ";
answers[68] = 3;
explanation[68] = " To help people operating on the process stay on target           ";

questions[69] = " Problems identified are displayed for everyones attention rather than Covering up     ";
choices[69] = new Array();
choices[69][0] = "make the problem visibile          ";    
choices[69][1] = "Make it fast    ";
choices[69][2] = "Make it beautiful    ";
choices[69][3] = "None          ";
answers[69] = 1;
explanation[69] = " make the problem visibile                ";

questions[70] = " In an application maintenance project, the team was following the practice of placing a Red flag in front of the engineer who was resolving a Severity 0 incident. This is an example of     ";
choices[70] = new Array();
choices[70][0] = "Standardization          ";    
choices[70][1] = "Kanban     ";
choices[70][2] = "Andon    ";
choices[70][3] = "None of the above        ";
answers[70] = 3;
explanation[70] = " Andon                ";

questions[71] = " Complete visibility of all work items and status in the team    ";
choices[71] = new Array();
choices[71][0] = "Standardization         ";    
choices[71][1] = "Mistake proofing       ";
choices[71][2] = "Visual Control     ";
choices[71][3] = "ecube       ";
answers[71] = 3;
explanation[71] = " Visual Control                ";

questions[72] = "The principle of flow emphasizes on     ";
choices[72] = new Array();
choices[72][0] = "reduction in batch size         ";    
choices[72][1] = "moving to next phase as quickly as possible       ";
choices[72][2] = "individual productivity     ";
choices[72][3] = "customer satisfaction        ";
answers[72] = 1;
explanation[72] = " reduction in batch size                 ";

questions[73] = "------------is critical starting point of lean thinking     ";
choices[73] = new Array();
choices[73][0] = "Project Value           ";    
choices[73][1] = "Customer Value       ";
choices[73][2] = "Value Addition     ";
choices[73][3] = "Program value        ";
answers[73] = 2;
explanation[73] = " Customer Value                ";

questions[74] = "Value is always defined from the perspective of      ";
choices[74] = new Array();
choices[74][0] = " Customer           ";    
choices[74][1] = "Project         ";
choices[74][2] = "Product       ";
choices[74][3] = "All of the above        ";
answers[74] = 1;
explanation[74] = "  Customer                ";

questions[75] = "VSM helps in        ";
choices[75] = new Array();
choices[75][0] = " Identifying areas where automation can be implemented           ";    
choices[75][1] = "Identify areas for putting mistake proofing process         ";
choices[75][2] = " Identify value adding and non value adding activity in a process       ";
choices[75][3] = "Helps in identifying areas where Visual control can be implemented        ";
answers[75] = 3;
explanation[75] = "  Identify value adding and non value adding activity in a process                ";

questions[76] = "What is the typical first step towards identifying area of waste elimination in a project     ";
choices[76] = new Array();
choices[76][0] = "Root Cause Analysis           ";    
choices[76][1] = "5S           ";
choices[76][2] = "Mistake proofing         ";
choices[76][3] = " Value Stream Mapping          ";
answers[76] = 4;
explanation[76] = "  Value Stream Mapping               ";

questions[77] = "Value in Lean terms is a deliverable to client which is usable. Identify which statements below qualify for this Value definition     ";
choices[77] = new Array();
choices[77][0] = "Value in case of recruitment group is each human resource made available to the project teams           ";    
choices[77][1] = "Value in case of Maintenance projects is Bugs serviced per release         ";
choices[77][2] = "Value in case of Conversion project is Every web page converted   ";
choices[77][3] = "  All of the above       ";
answers[77] = 4;
explanation[77] = "  All of the above                ";

questions[78] = "Identify Waste activities in these scenarios     ";
choices[78] = new Array();
choices[78][0] = " Waiting and searching for resources in the lab during reproduction and testing.           ";    
choices[78][1] = "capturing relevant information in defect tracker       ";
choices[78][2] = "Updating knowledge base      ";
choices[78][3] = " Frequent build cycles, frequent code reviews and early testing";
answers[78] = 1;
explanation[78] = "  Waiting and searching for resources in the lab during reproduction and testing.              ";

questions[79] = "Optimization of current state map gives …     ";
choices[79] = new Array();
choices[79][0] = "Optimized map              ";    
choices[79][1] = "Value map           ";
choices[79][2] = " future state map         ";
choices[79][3] = " All the above          ";
answers[79] = 3;
explanation[79] = "  future state map                ";

questions[80] = "Time taken for those activities that actually transform the product/service in a way that the customer is willing to pay for   ";
choices[80] = new Array();
choices[80][0] = "Takt Time           ";    
choices[80][1] = "Activity Time         ";
choices[80][2] = "Cycle Time        ";
choices[80][3] = " Value Added Time         ";
answers[80] = 4;
explanation[80] = "  Value Added Time                ";

questions[81] = "Which statements defines VALUE ?  ";
choices[81] = new Array();
choices[81][0] = "The customer has to be willing to pay for the activity            ";    
choices[81][1] = "The activity must directly transform the item or person flowing through the process into what the customer is willing to pay for.         ";
choices[81][2] = "The activity must meet all expected requirements on the first attempt        ";
choices[81][3] = " All of the above.         ";
answers[81] = 4;
explanation[81] = "  All of the above.              ";

questions[82] = "What is the first step in the VSM     ";
choices[82] = new Array();
choices[82][0] = "Draw the Value stream mapping(As-IS)            ";    
choices[82][1] = " Identify the customer Value deliverable         ";
choices[82][2] = "Remove the wastes       ";
choices[82][3] = "Identify the Value added and Non value added activities       ";
answers[82] = 2;
explanation[82] = "  Identify the customer Value deliverable               ";

questions[83] = "According to Womack lean thinking consists of ---- core principles   ";
choices[83] = new Array();
choices[83][0] = "3                ";    
choices[83][1] = " 7           ";
choices[83][2] = "14        ";
choices[83][3] = "5           ";
answers[83] = 3; 
explanation[83] = " 14           ";

questions[84] = "Which of these are not a core lean principle according to Womack   ";
choices[84] = new Array();
choices[84][0] = "Pull              ";    
choices[84][1] = " Flow           ";
choices[84][2] = "Value           ";
choices[84][3] = " Push           ";
answers[84] = 4;
explanation[84] = " Push          ";

questions[85] = "Following are categories of waste     ";
choices[85] = new Array();
choices[85][0] = "Overproduction               ";    
choices[85][1] = " Transportation                      ";
choices[85][2] = "Motion                          ";
choices[85][3] = "  All of the above                      ";
answers[85] = 4;
explanation[85] = " All of the above          ";

questions[86] = "How many categories of wastes can  be identified as per Toyota production system?     ";
choices[86] = new Array();
choices[86][0] = "7            ";    
choices[86][1] = " 10           ";
choices[86][2] = "100      ";
choices[86][3] = " 20            ";
answers[86] = 1;
explanation[86] = " 7           ";

questions[87] = "Wasting time in finding information can be mapped to -------------------- waste     ";
choices[87] = new Array();
choices[87][0] = "Overproduction            ";    
choices[87][1] = "Inventory            ";
choices[87][2] = " Motion      ";
choices[87][3] = " All of the Above            ";
answers[87] = 3;
explanation[87] = " Motion           ";

questions[88] = "Any activity that consumes resources, but does not create value       ";
choices[88] = new Array();
choices[88][0] = " Muda             ";    
choices[88][1] = "Mura            ";
choices[88][2] = " Muri            ";
choices[88][3] = " All of the Above            ";
answers[88] = 1;
explanation[88] = " Muda            ";

questions[89] = "Making more parts than you can sell      ";
choices[89] = new Array();
choices[89][0] = "Over processing            ";    
choices[89][1] = " Overproduction            ";
choices[89][2] = " Both 1 and 2     ";
choices[89][3] = " None            ";
answers[89] = 2;
explanation[89] = " Overproduction             ";

questions[90] = "An engineer is fixing a bug request from customer. The customer value here is ------------------------.      ";
choices[90] = new Array();
choices[90][0] = "Fixed Bug           ";    
choices[90][1] = "No side effect            ";
choices[90][2] = " Both 1 and 2     ";
choices[90][3] = " None            ";
answers[90] = 3;
explanation[90] = " Both 1 and 2             ";

questions[91] = "Attributes of value deliverables -         ";
choices[91] = new Array();
choices[91][0] = "Quality           ";    
choices[91][1] = "Timeliness            ";
choices[91][2] = "Cost    ";
choices[91][3] = " All the above             ";
answers[91] = 4;
explanation[91] = " All the above             ";

questions[92] = "According to Lean thinking, leaders should work with first hand information from --------------- by direct observation.         ";
choices[92] = new Array();
choices[92][0] = "Customers          ";    
choices[92][1] = "Workplace           ";
choices[92][2] = "Both 1 and 2  ";
choices[92][3] = " None          ";
answers[92] = 2;
explanation[92] = "Workplace              ";

questions[93] = "Examples for Muda           ";
choices[93] = new Array();
choices[93][0] = "Hand off           ";    
choices[93][1] = "Task Switching           ";
choices[93][2] = " Both 1 and 2   ";
choices[93][3] = " None          ";
answers[93] = 3;
explanation[93] = " Both 1 and 2               ";

questions[94] = "Identify the Muda (waste) which should be eliminated from the process          ";
choices[94] = new Array();
choices[94][0] = "Doing work manually when it can be automated           ";    
choices[94][1] = "Equipment not working           ";
choices[94][2] = " Spending efforts in processing repetitive issues ";
choices[94][3] = "  All of the Above         ";
answers[94] = 4;
explanation[94] = "  All of the Above               ";

questions[95] = "In a project X, few resources  are overburdened due to disparity of competency in teams. This situation is a result of          ";
choices[95] = new Array();
choices[95][0] = "Muda           ";    
choices[95][1] = " Muri           ";
choices[95][2] = " Mura   ";
choices[95][3] = " None          ";
answers[95] = 2;
explanation[95] = "   Muri              ";

questions[96] = "DSM helps in           ";
choices[96] = new Array();
choices[96][0] = "Sequencing Activities         ";    
choices[96][1] = "Shuffling Activities          ";
choices[96][2] = " Delaying Activities  ";
choices[96][3] = " None          ";
answers[96] = 1;
explanation[96] = "  Sequencing Activities             ";

questions[97] = "DSM is -------------------------           ";
choices[97] = new Array();
choices[97][0] = "Design Structure Matrix        ";    
choices[97][1] = "Default Structure Matrix          ";
choices[97][2] = "Deep Structure Matrix ";
choices[97][3] = "Defected Software module         ";
answers[97] = 1;
explanation[97] = " Design Structure Matrix             ";

questions[98] = "Productivity is the  ratio of  ------- and  the total effort put in           ";
choices[98] = new Array();
choices[98][0] = "Value Added Time        ";    
choices[98][1] = "Throughput         ";
choices[96][2] = " Work    ";
choices[96][3] = " Time          ";
answers[96] = 3;
explanation[98] = "The right answer is  Work             ";

questions[99] = "Work In Progress is directly proportional to lead time is also known as           ";
choices[99] = new Array();
choices[99][0] = "Murphys law        ";    
choices[99][1] = "Moores law         ";
choices[99][2] = "Littles law    ";
choices[99][3] = "None          ";
answers[99] = 3;
explanation[99] = " Littles law              ";

questions[100] = "Multiple hand-offs in delivery is categorized under which classification of waste           ";
choices[100] = new Array();
choices[100][0] = "Transportation               ";    
choices[100][1] = "Motion                       ";
choices[100][2] = "Over Production      ";
choices[100][3] = "Over Processing        ";
answers[100] = 1;
explanation[100] = "Transportation              ";

questions[101] = "Static analyzer tool used by a team is an example of              ";
choices[101] = new Array();
choices[101][0] = "Automation                 ";    
choices[101][1] = "Standardization                          ";
choices[101][2] = "Mistake Proofing     ";
choices[101][3] = "All of the above       ";
answers[101] = 4;
explanation[101] = "All of the above              ";

questions[102] = "Reviews are an example of                  ";
choices[102] = new Array();
choices[102][0] = "Type 1 Muda                 ";    
choices[102][1] = "Type 2 Muda                          ";
choices[102][2] = "None of the above    ";
choices[102][3] = "All of the above       ";
answers[102] = 1;
explanation[102] = "Type 1 Muda              ";

questions[103] = "Which software development methodology closely resembles a Just in Time & Pull model                ";
choices[103] = new Array();
choices[103][0] = "Waterfall model                 ";    
choices[103][1] = "VV development model                          ";
choices[103][2] = "2I development model    ";
choices[103][3] = "Agile development model      ";
answers[103] = 4;
explanation[103] = "Agile development model               ";

questions[104] = "Which of the following has the Poke Yoke / Mistake proofing process implemented in test management tool?                 ";
choices[104] = new Array();
choices[104][0] = "Predesigned roles created in the test management tool with team members assigned to the respective role                 ";    
choices[104][1] = "Process document and Checklist to identifying the roles, process and authority defined for all testing phases                        ";
choices[104][2] = "Validation and control established through a designated QC role to assign and define the workflow  ";
choices[104][3] = "Role based workflow defined in the test management tool and mapping members to the predesigned roles       ";
answers[104] = 4;
explanation[104] = "Role based workflow defined in the test management tool and mapping members to the predesigned roles              ";

questions[105] = "What is the sequence in which 5S should be carried out?                 ";
choices[105] = new Array();
choices[105][0] = "Sort - Straighten - Shine - Standardize - Sustain                 ";    
choices[105][1] = "Sort -Shine - Straighten - Sustain - Standardize     ";
choices[105][2] = "Straighten - Shine - Sort - Standardize - Sustain    ";
choices[105][3] = "Standardize - Sort - Shine - Straighten - Shine       ";
answers[105] = 1;
explanation[105] = "Sort - Straighten - Shine - Standardize - Sustain           ";

questions[106] = "Sustaining lean in a team is possible through                 ";
choices[106] = new Array();
choices[106][0] = "Having a dedicated person assigned to carry out lean initiatives                 ";    
choices[106][1] = "Ongoing involvement of the team towards identifying and implementing improvement initiatives                      ";
choices[106][2] = "Involving the team towards coming out with improvement initiatives on need basis   ";
choices[106][3] = "Including the team towards implementing the ideas on need basis     ";
answers[106] = 2;
explanation[106] = "Ongoing involvement of the team towards identifying and implementing improvement initiatives            ";

questions[107] = "Identify the application of Pull in the following instances              ";
choices[107] = new Array();
choices[107][0] = "Appointment with a doctor                 ";    
choices[107][1] = "Appointment with a passport officer                           ";
choices[107][2] = "Appointment with a Bank officer    ";
choices[107][3] = "Appointment with a Marketing executive       ";
answers[107] = 4;
explanation[107] = "Appointment with a Marketing executive           ";

questions[108] = "Which of the following helps in effective Visual Control               ";
choices[108] = new Array();
choices[108][0] = "Control Charts                 ";    
choices[108][1] = "Review Guidelines                          ";
choices[108][2] = "Process Flow Diagram   ";
choices[108][3] = "Team structure diagram       ";
answers[108] = 1;
explanation[108] = "Control Charts            ";

questions[109] = "Which of the following is tops the Non Value adding activity of the options listed below of equal efforts spent               ";
choices[109] = new Array();
choices[109][0] = "Self Review                 ";    
choices[109][1] = "Peer Review                         ";
choices[109][2] = "Table Review ";
choices[109][3] = "Lead Review      ";
answers[109] = 3;
explanation[109] = "Table Review            ";

questions[110] = "Following are two key pillars of Toyota Production System ?              ";
choices[110] = new Array();
choices[110][0] = "Just-in-Time and Waste Elimination                 ";    
choices[110][1] = "Jidoka and Just in Time                         ";
choices[110][2] = "Visual Management and Kaizen  ";
choices[110][3] = "Standardisation and Leveled Production      ";
answers[110] = 2;
explanation[110] = "Jidoka and Just in Time            ";

questions[111] = "Building a culture of stopping the process to 'built in quality' is called ?            ";
choices[111] = new Array();
choices[111][0] = "Waste elimination                 ";    
choices[111][1] = "Standardisation                        ";
choices[111][2] = "Jidoka           ";
choices[111][3] = "None of the above          ";
answers[111] = 3;
explanation[111] = "Jidoka            ";

questions[112] = "Following tool is used to identify bottleneck in the process ?          ";
choices[112] = new Array();
choices[112][0] = "Kanban Chart                ";    
choices[112][1] = "5S                       ";
choices[112][2] = "VSM         ";
choices[112][3] = "None of the above          ";
answers[112] = 1;
explanation[112] = "Kanban Chart           ";

questions[113] = "Nemawashi priciple means?         ";
choices[113] = new Array();
choices[113][0] = "Don't take decisions but start implementation immediately and learn from it               ";    
choices[113][1] = "Make decisions slowly by consensus and implement rapidly.                      ";
choices[113][2] = "Take decisions quickly and start implementation     ";
choices[113][3] = "None of the above          ";
answers[113] = 2;
explanation[113] = "Make decisions slowly by consensus and implement rapidly.";

questions[114] = "Which technique is used to find waste in the process?               ";
choices[114] = new Array();
choices[114][0] = "Fishbone diagram                   ";    
choices[114][1] = " Value stream mapping                      ";
choices[114][2] = "SWOT analysis                      ";
choices[114][3] = "None of the above                   ";
answers[114] = 2;
explanation[114] = " Value stream mapping ";

questions[115] = "Which is a waste in a process?       ";
choices[115] = new Array();
choices[115][0] = "Inventory                                            ";    
choices[115][1] = "Transportation                                     ";
choices[115][2] = "Waiting                                       ";
choices[115][3] = " All of the above         ";
answers[115] = 4;
explanation[115] = "All of the above  .";

questions[116] = "In a call center on average it takes 15 min to serve one customer. This includes waiting time of 10 min. What is process cycle efficiency?       ";
choices[116] = new Array();
choices[116][0] = "66%                                           ";    
choices[116][1] = "33%                                    ";
choices[116][2] = "20%                                     ";
choices[116][3] = "40%         ";
answers[116] = 2;
explanation[116] = "33%    ";

questions[117] = "Which aspect of 5S highlights maintaining  workplace efficiency on an ongoing basis?         ";
choices[117] = new Array();
choices[117][0] = "Shine                                           ";    
choices[117][1] = "Sort                                   ";
choices[117][2] = "Sustain                                   ";
choices[117][3] = "None of the above         ";
answers[117] = 3;
explanation[117] = "Sustain    ";

questions[118] = "_____________________ is the aspect of 5S which makes the 3S's are repeatable          ";
choices[118] = new Array();
choices[118][0] = "Shine                                           ";    
choices[118][1] = "Sort                                   ";
choices[118][2] = "Sustain                                   ";
choices[118][3] = "Standardize        ";
answers[118] = 4;
explanation[118] = "  Standardize    ";

questions[119] = "Muri results in Mura. True or False?                          ";
choices[119] = new Array();
choices[119][0] = "TRUE                                               ";    
choices[119][1] = "FALSE                                   ";
choices[119][2] = "No idea                                   ";
choices[119][3] = "None of the above         ";
answers[119] = 2;
explanation[119] = "FALSE    ";

questions[120] = "Mass production and Batch production are in line with Lean thinking.            ";
choices[120] = new Array();
choices[120][0] = "TRUE                                          ";    
choices[120][1] = "FALSE                                                                     ";
choices[120][2] = "No idea                                    ";
choices[120][3] = "None of the above         ";
answers[120] = 2;
explanation[120] = "FALSE   ";

questions[121] = "Single piece flow is the ideal level target in TPS          ";
choices[121] = new Array();
choices[121][0] = "False                                         ";    
choices[121][1] = "True                                                                    ";
choices[121][2] = "No idea                                    ";
choices[121][3] = "None of the above         ";
answers[121] = 2;
explanation[121] = "True  ";

questions[122] = "Review of the completed task is considered -------------- as per lean thinking.         ";
choices[122] = new Array();
choices[122][0] = "Value Add                                        ";    
choices[122][1] = "Value Enhnancer                                                                    ";
choices[122][2] = "  Non Value Add                                   ";
choices[122][3] = "None         ";
answers[122] = 3;
explanation[122] = "Non Value Add   ";

questions[123] = "The DSM of requirements of a software solution to be developed has 75% of the cells showing dependencies. It is most likely that the DSM is done ----------------------         ";
choices[123] = new Array();
choices[123][0] = "correctly                                       ";    
choices[123][1] = "only partially                                                                   ";
choices[123][2] = "   incorrectly                                    ";
choices[123][3] = "None         ";
answers[123] = 3;
explanation[123] = "  incorrectly  ";

questions[124] = "Who is the father of Toyota Production System ?         ";
choices[124] = new Array();
choices[124][0] = "Taichi Ohno                                       ";    
choices[124][1] = "Sakichi Toyoda                                                                   ";
choices[124][2] = "  Jeffrey Liker                                  ";
choices[124][3] = "None         ";
answers[124] = 1;
explanation[123] = "  Taichi Ohno ";

questions[125] = "Following are two key pillars of Toyota Production System ?         ";
choices[125] = new Array();
choices[125][0] = "Just-in-Time and Waste Elimination                                      ";    
choices[125][1] = "Jidoka and Just in Time                                                                   ";
choices[125][2] = "  Visual Management and Kaizen                                 ";
choices[125][3] = "Standardisation and Leveled Production         ";
answers[125] = 2;
explanation[125] = "  Jidoka and Just in Time   ";

questions[126] = "DSM helps in          ";
choices[126] = new Array();
choices[126][0] = "Allocation of activities                                      ";    
choices[126][1] = "Shuffling Activities                                                                 ";
choices[126][2] = "  Delaying Activities                                 ";
choices[126][3] = "None      ";
answers[126] = 1;
explanation[126] = "  Allocation of activities   ";

questions[127] = "DSM helps eliminate/reduce         ";
choices[127] = new Array();
choices[127][0] = "Waste of wait time                                     ";    
choices[127][1] = "Waste of defects                                                                ";
choices[127][2] = "  Both (a) & (b)                                ";
choices[127][3] = "None of the above      ";
answers[127] = 3;
explanation[127] = "  Both (a) & (b)   ";

questions[128] = "Automation helps in the following ways -         ";
choices[128] = new Array();
choices[128][0] = "Standardizes work                                    ";    
choices[128][1] = "Mistake proofing                                                                ";
choices[128][2] = "  Both (a) & (b)                                ";
choices[128][3] = "None of the above      ";
answers[128] = 3;
explanation[128] = "  Both (a) & (b)   ";

questions[129] = "Kanban boards help surface problems in the service delivery process         ";
choices[129] = new Array();
choices[129][0] = "TRUE                                   ";    
choices[129][1] = "FALSE                                                                ";
choices[129][2] = "No Idea                                ";
choices[129][3] = "None of the above      ";
answers[129] = 1;
explanation[129] = " TRUE   ";

questions[130] = "Standardized tasks do not lend themselves easily to continuous improvement         ";
choices[130] = new Array();
choices[130][0] = "TRUE                                   ";    
choices[130][1] = "FALSE                                                                ";
choices[130][2] = "No Idea                                ";
choices[130][3] = "None of the above      ";
answers[130] = 2;
explanation[130] = " FALSE   ";


questions[131] = "Standardization helps in         ";
choices[131] = new Array();
choices[131][0] = "Eliminating or reducing variation in a process                                  ";    
choices[131][1] = "Eliminating or reducing variation in output                                                                ";
choices[131][2] = " Both (a) & (b)                               ";
choices[131][3] = "None of the above      ";
answers[131] = 3;
explanation[131] = "  Both (a) & (b)   ";

questions[132] = "Takt is a tool to help surface problems early         ";
choices[132] = new Array();
choices[132][0] = "TRUE                                   ";    
choices[132][1] = "FALSE                                                                ";
choices[132][2] = "No Idea                                ";
choices[132][3] = "None of the above      ";
answers[132] = 1;
explanation[132] = " TRUE   ";


questions[133] = "The following tools can be used to surface problems early        ";
choices[133] = new Array();
choices[133][0] = "Visual controls                                 ";    
choices[133][1] = "Kanban boards                                                                ";
choices[133][2] = "Takt time                                ";
choices[133][3] = "All of the above      ";
answers[133] = 4;
explanation[133] = " All of the above   ";

questions[134] = "Review checklists are good examples of        ";
choices[134] = new Array();
choices[134][0] = "Standardization                                 ";    
choices[134][1] = "Jidoka                                                                ";
choices[134][2] = "Both (a) & (b)                                ";
choices[134][3] = "None of the above     ";
answers[134] = 3;
explanation[134] = " Both (a) & (b)   ";

questions[135] = "Application of Lean techniques/tenets leads to        ";
choices[135] = new Array();
choices[135][0] = "Improvement in Quality and Schedule                                 ";    
choices[135][1] = "Improvement in Cost                                                                ";
choices[135][2] = "Both (a) & (b)                                ";
choices[135][3] = "Only (c)     ";
answers[135] = 3;
explanation[135] = " Both (a) & (b)   ";

questions[136] = "The number of full factorial test cases that can be generated for a given set of factors and levels using Orthogonal Arrays is:        ";
choices[136] = new Array();
choices[136][0] = "Levels (power) factors                                 ";    
choices[136][1] = "levels * factors                                                               ";
choices[136][2] = "levels + factors                                ";
choices[136][3] = "levels / factors     ";
answers[136] = 1;
explanation[136] = "Levels (power) factors     ";

questions[137] = "Making fundamental and radical changes to a process or system is called        ";
choices[137] = new Array();
choices[137][0] = "Kaizen                                 ";    
choices[137][1] = "Kaikaku                                                             ";
choices[137][2] = "Kanban                               ";
choices[137][3] = "Jidoka     ";
answers[137] = 2;
explanation[137] = "Kaikaku     ";

questions[138] = "Heijunka is better known as         ";
choices[138] = new Array();
choices[138][0] = "Work load levelling                                ";    
choices[138][1] = "Knowledge Management                                                            ";
choices[138][2] = "Visualizing the work flow                               ";
choices[138][3] = "Stop the line when there is a quality problem     ";
answers[138] = 1;
explanation[138] = "Work load levelling     ";

questions[139] = "Technique that can be best used for test setup time reduction is        ";
choices[139] = new Array();
choices[139][0] = "Jidoka                                ";    
choices[139][1] = "Orthogonal Arrays                                                             ";
choices[139][2] = "SMED                               ";
choices[139][3] = "Kanban     ";
answers[139] = 3;
explanation[139] = "SMED     ";

questions[140] = "Two pillars for the Toyota Production System are        ";
choices[140] = new Array();
choices[140][0] = "Continuous Improvement and Respect for People                                ";    
choices[140][1] = "Nemawashi and Genchi Genbutsu                                                             ";
choices[140][2] = "Kaikaku and Respect for People                              ";
choices[140][3] = "Kaizen and Nemawashi     ";
answers[140] = 1;
explanation[140] = "Continuous Improvement and Respect for People     ";

questions[141] = "Which of the following is not a brainstorming / Root Cause Analysis tool        ";
choices[141] = new Array();
choices[141][0] = "Pareto                                ";    
choices[141][1] = "Ishikawa Diagram                                                             ";
choices[141][2] = "Six Thinking Hats                              ";
choices[141][3] = "Andon     ";
answers[141] = 4;
explanation[141] = "Andon     ";

questions[142] = "Which of the following is a useful tool for accurate impact analysis of CRs      ";
choices[142] = new Array();
choices[142][0] = "Orthogonal Arrays                                ";    
choices[142][1] = "DSM                                                             ";
choices[142][2] = "SMED                              ";
choices[142][3] = "None of the above     ";
answers[142] = 2;
explanation[142] = "DSM     ";

questions[143] = "Setting of WIP limit is done in      ";
choices[143] = new Array();
choices[143][0] = "Standardization                                ";    
choices[143][1] = "Kanban                                                             ";
choices[143][2] = "SMED                              ";
choices[143][3] = "VSM     ";
answers[143] = 2;
explanation[143] = "Kanban     ";

questions[144] = "Theory of Constraints focusses on      ";
choices[144] = new Array();
choices[144][0] = "Removing Waste                                ";    
choices[144][1] = "Reduce cycle time                                                             ";
choices[144][2] = "Managing the constraint                              ";
choices[144][3] = "Identifying the constraint     ";
answers[144] = 3;
explanation[144] = "Managing the constraint     ";

questions[145] = "Kanban helps to achieve      ";
choices[145] = new Array();
choices[145][0] = "Pull In the system                                ";    
choices[145][1] = "Identifiy Bottlenecks                                                             ";
choices[145][2] = "Set up WIP Limits                              ";
choices[145][3] = "All the above     ";
answers[145] = 4;
explanation[145] = "All the above     ";

questions[146] = "OA focusses on       ";
choices[146] = new Array();
choices[146][0] = "Testing pair wise interactions                                ";    
choices[146][1] = "Testing Single functionality                                                             ";
choices[146][2] = "Regression testing                              ";
choices[146][3] = "None     ";
answers[146] = 1;
explanation[146] = "Testing pair wise interactions     ";

questions[147] = "Key benefits achieved through OA are      ";
choices[147] = new Array();
choices[147][0] = "Optimized testcases                                ";    
choices[147][1] = "Better coverage                                                             ";
choices[147][2] = "Early defect detection                              ";
choices[147][3] = "All of the Above     ";
answers[147] = 4;
explanation[147] = "All of the Above     ";

questions[148] = "Which tenet helps to reduce overburden      ";
choices[148] = new Array();
choices[148][0] = "Takt Time                                ";    
choices[148][1] = "VSM                                                             ";
choices[148][2] = "Visual Control                              ";
choices[148][3] = "None     ";
answers[148] = 4;
explanation[148] = "None     ";

questions[149] = "Output of the DSM tool helps in      ";
choices[149] = new Array();
choices[149][0] = "Exploiting concurrency                                ";    
choices[149][1] = "Impact Analysis                                                             ";
choices[149][2] = "Deriving right sequence                              ";
choices[149][3] = "All of the above     ";
answers[149] = 4;
explanation[149] = "All of the above     ";

questions[150] = "Reduction in Variation of work can be achieved by applying      ";
choices[150] = new Array();
choices[150][0] = "VSM                                ";    
choices[150][1] = "Visual Control                                                             ";
choices[150][2] = "Standardization                             ";
choices[150][3] = "None     ";
answers[150] =3 ;
explanation[150] = " Standardization    ";

questions[151] = "Standardization mainly focusses on       ";
choices[151] = new Array();
choices[151][0] = "The How aspect                                ";    
choices[151][1] = "Team knowledge                                                             ";
choices[151][2] = "Defining tasks                              ";
choices[151][3] = "All of the above     ";
answers[151] = 1;
explanation[151] = " The How aspect    ";

questions[152] = "First Step of any problem solving      ";
choices[152] = new Array();
choices[152][0] = "Visual Control                                ";    
choices[152][1] = "Go See yourself                                                             ";
choices[152][2] = "VSM                              ";
choices[152][3] = "Waste Elimination     ";
answers[152] =2 ;
explanation[152] = "  Go See yourself    ";

questions[153] = "Addressing Probems at root cause level      ";
choices[153] = new Array();
choices[153][0] = "DSM                                ";    
choices[153][1] = "5 Why                                                             ";
choices[153][2] = "VSM                              ";
choices[153][3] = "Visual Control     ";
answers[153] =2 ;
explanation[153] = "5 Why     ";

questions[154] = "Heijunka is the lean technique for      ";
choices[154] = new Array();
choices[154][0] = "Reducing waste                                ";    
choices[154][1] = "Reducing overburden by addressing variation                                                             ";
choices[154][2] = "Reduce cycle time                              ";
choices[154][3] = "All of the above     ";
answers[154] = 4;
explanation[154] = "All of the above     ";

questions[155] = "What is the the German word for musical meter? It is also Lean principle used to manage pace of production,  ";
choices[155] = new Array();
choices[155][0] = "DSM                                   ";    
choices[155][1] = "Takt                                                            ";
choices[155][2] = "OA                              ";
choices[155][3] = "Muda    ";
answers[155] = 2;
explanation[155] = "Takt     ";

questions[156] = "Kaizen means      ";
choices[156] = new Array();
choices[156][0] = "To change for the good of all                                ";    
choices[156][1] = "continuous improvement                                                             ";
choices[156][2] = "fast resolution                              ";
choices[156][3] = "productivity improvement     ";
answers[156] =1 ;
explanation[156] = "To change for the good of all      ";

questions[157] = "Non value added activity results in     ";
choices[157] = new Array();
choices[157][0] = "delay                                ";    
choices[157][1] = "low pace                                                             ";
choices[157][2] = "overprocessing                              ";
choices[157][3] = "all of them     ";
answers[157] = 4;
explanation[157] = "all of them     ";

questions[158] = "Go See Yourself helps to      ";
choices[158] = new Array();
choices[158][0] = "reduce waste                                ";    
choices[158][1] = "surface problem early                                                             ";
choices[158][2] = "wait time                              ";
choices[158][3] = "none of them     ";
answers[158] = 2;
explanation[158] = "  surface problem early   ";

questions[159] = "OA can be applied during      ";
choices[159] = new Array();
choices[159][0] = "Requirement phase                                ";    
choices[159][1] = "Testcase execution                                                             ";
choices[159][2] = "testcase preperation                              ";
choices[159][3] = "CUT     ";
answers[159] = 3;
explanation[159] = "testcase preperation     ";

questions[160] = "workplace efficiency can be improved by using      ";
choices[160] = new Array();
choices[160][0] = "5S                                ";    
choices[160][1] = "VSM                                                             ";
choices[160][2] = "Takt time                              ";
choices[160][3] = "DSM     ";
answers[160] = 1;
explanation[160] = "5S     ";

questions[161] = "lean requires monitoring key metrics      ";
choices[161] = new Array();
choices[161][0] = "True                                  ";    
choices[161][1] = "False                                                            ";
choices[161][2] = "No Idea                              ";
choices[161][3] = "None of the Above     ";
answers[161] = 1;
explanation[161] = "True       ";

questions[162] = "what is process efficency?      ";
choices[162] = new Array();
choices[162][0] = "non value added time/value added time                                ";    
choices[162][1] = "value added time/non-value added time                                                             ";
choices[162][2] = "value added time/total time                              ";
choices[162][3] = "non-value added time/total time     ";
answers[162] = 3;
explanation[162] = "value added time/total time       ";

questions[163] = "Non value added activities should be      ";
choices[163] = new Array();
choices[163][0] = "eliminated                                ";    
choices[163][1] = "automated                                                             ";
choices[163][2] = "optimized                              ";
choices[163][3] = "none of them     ";
answers[163] = 3;
explanation[163] = "optimized     ";

questions[164] = "One project manager generates 5 reports everyday and sends them in different format to various stakeholders.This is an example of      ";
choices[164] = new Array();
choices[164][0] = "overburden                                ";    
choices[164][1] = "overprocessing                                                             ";
choices[164][2] = "both a & b                              ";
choices[164][3] = "none of them     ";
answers[164] = 2;
explanation[164] = "overprocessing     ";

questions[165] = "visual control helps      ";
choices[165] = new Array();
choices[165][0] = "only PM                                ";    
choices[165][1] = "only team members                                                             ";
choices[165][2] = "leads                              ";
choices[165][3] = "whole team     ";
answers[165] = 4;
explanation[165] = "whole team     ";

questions[166] = "lean can be applied at      ";
choices[166] = new Array();
choices[166][0] = "project level                                ";    
choices[166][1] = "program level                                                             ";
choices[166][2] = "any daily transaction                              ";
choices[166][3] = "All of the above     ";
answers[166] = 4;
explanation[166] = "All of the above     ";

questions[167] = "SMED is a technique introduced by --------      ";
choices[167] = new Array();
choices[167][0] = "Henry Ford                                ";    
choices[167][1] = "Tahichi Ohno                                                             ";
choices[167][2] = "Shigeo Shingo                              ";
choices[167][3] = "None of the above     ";
answers[167] = 3;
explanation[167] = "Shigeo Shingo     ";

questions[168] = "Ferrari or a Formula 1 Racing Car race 'Pit Stop' where the car refuelling and other setup happens is a classic example of ------------      ";
choices[168] = new Array();
choices[168][0] = "OA                               ";    
choices[168][1] = "SMED                                                             ";
choices[168][2] = "DSM                             ";
choices[168][3] = "Waste Elimination     ";
answers[168] = 2;
explanation[168] = "SMED     ";

questions[169] = "Displace, Eliminate, Reduce, Standardize, Automate the setup time is principles of Lean tenet ---------------------     ";
choices[169] = new Array();
choices[169][0] = "Visual Control                               ";    
choices[169][1] = "SMED                                                            ";
choices[169][2] = "5S                              ";
choices[169][3] = "Go-See-Yourself   ";
answers[169] = 2;
explanation[169] = "SMED     ";

questions[170] = "Signal from a downstream process to its upstream process to produce something is called -------------     ";
choices[170] = new Array();
choices[170][0] = "Muda                                ";    
choices[170][1] = "Kanban                                                            ";
choices[170][2] = "Muri                             ";
choices[170][3] = "Mura         ";
answers[170] = 2;
explanation[170] = "Kanban     ";

questions[171] = "Kanban board should have the following columns     ";
choices[171] = new Array();
choices[171][0] = "Closed/OnHold                                ";    
choices[171][1] = "WIP/Done                                                                  ";
choices[171][2] = "Resolved/Done                              ";
choices[171][3] = "Ongoing/Onhold    ";
answers[171] = 2;
explanation[171] = "WIP/Done      ";

questions[172] = "The 4 Ps of 14 principles of Toyota Production system are     ";
choices[172] = new Array();
choices[172][0] = "People,Production,Process,Philosophy                               ";    
choices[172][1] = "Problem Solving, People and Partners, Process and Philosophy                                                             ";
choices[172][2] = "Practice, People and Partners, Process and Production                             ";
choices[172][3] = "None of the above   ";
answers[172] = 2;
explanation[172] = "Problem Solving, People and Partners, Process and Philosophy";

questions[173] = "Queue Theory is used for ------------------        ";
choices[173] = new Array();
choices[173][0] = "Work Allocation                               ";    
choices[173][1] = "Capacity Planning                                                             ";
choices[173][2] = "Work Distribution                             ";
choices[173][3] = "Waste Identification     ";
answers[173] = 2;
explanation[173] = "Capacity Planning     ";

questions[174] = "5-Why is used to identify         ";
choices[174] = new Array();
choices[174][0] = "Problems                               ";    
choices[174][1] = "Causes of problems                                                            ";
choices[174][2] = "Capacity Distribution                              ";
choices[174][3] = "People management   ";
answers[174] = 2;
explanation[174] = "Causes of problems     ";

questions[175] = "Information Spaghetti is used to study     ";
choices[175] = new Array();
choices[175][0] = "Process                                ";    
choices[175][1] = "Flow of Information and Communication                                                            ";
choices[175][2] = "Clarification                             ";
choices[175][3] = "Collaboration    ";
answers[175] = 2;
explanation[175] = "Flow of Information and Communication   ";




// response for getting 100%
response[0] = "Excellent, top marks!";
// response for getting 90% or more
response[1] = "Excellent, try again to get 100%!"
// response for getting 70% or more
response[2] = "Well done, that is a good score, can you do better?";
// response for getting over 50%
response[3] = "Nice one, you got more than half of the questions right, can you do better?";
// response for getting 40% or more
response[4] = "You got some questions right, you can do better!";
// response for getting 20% or more
response[5] = "You didn't do too well, why not try again!?";
// response for getting 10% or more
response[6] = "That was pretty poor!  Try again to improve!";
// response for getting 9% or less
response[7] = "Oh dear, I think you need to go back to school (or try again)!";






