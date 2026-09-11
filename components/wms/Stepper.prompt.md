One-line: the step indicator above a multi-step web form; handheld screens do not use it.

```jsx
<Stepper steps={['Gate Entry','Consignment Details']} current={0} onStepClick={setStep} />
```

Only used on the web surface, where a task spans screens and the user can see the whole path. Completed steps are clickable for going back; forward steps are not, because the data to reach them does not exist yet.
