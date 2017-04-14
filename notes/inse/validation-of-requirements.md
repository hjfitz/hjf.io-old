# Validating Requirements
The process of checking that requirements actually define the system that the user wants.

There is an exam question, *"2: Requirements - For each requirement, specify the type of requirement and a strategy used for validating that it has been met."*


There are a number of *types* of requirements to bare in mind. They are:
1. User Requirements;
2. System Requirements:
	- Functional Requirements
	- Nonfunctional Requirements

To validate the gathered requirements, a **requirements review** must take place, wherein each form of requirement must be validated. 
A requirements review is a process wherein a group of people, consisting of the customer and the engineers, read the requirements document and check for errors/anomalies.

There are several ways to validate a set of requirements:

1. **Validity checks:** Even though a user thinks that the system should perform operation X, it's entirely possible that they might not. This check ensures that the requirements of the system are valid, and that they are actually required.
2. **Consistency checks:** Ensuring that requirements do not conflict, or have different descriptions of the same function.
3. **Completness checks:** Ensuring that all of the requirements are included, and all functions defined by the user are included.
4. **Realism checks:** Users are stupid; they might require something that is not possible.
5. **Verifiability:** Ensuring that the requirements are written in such a way that they are verifiable.
	- Verifiable in this case means that the developer can write a set of tests to ensure that the system meets the specified requriement
6. **Prototyping:** Creating a prototype of the system in question. The customers can experiment with this model to ensure that it meets their real needs. Best used with *incremental* and *agile*
7. **Test-case generation:** Writing test cases before any code is written. The validation does not always need to be completed immediately; test cases can be written before any code is. When the code is written, the test cases may be run, to ensure that the written code conforms to the desired requirements.
