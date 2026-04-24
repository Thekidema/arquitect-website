# ARQUITECT Project - Prompts Index
**Complete guide to all available prompts and how to use them**

---

## 📖 Overview

We have created **4 comprehensive prompts** for developing and maintaining the ARQUITECT website at enterprise standards. This document helps you choose which prompt to use for different situations.

---

## 🎯 The 4 Prompts

### 1. **MASTER-PROMPT.txt** ⭐ START HERE
**When:** First time using any prompt, need complete reference
**Length:** Long (~764 lines)
**Format:** Plain text with clear sections
**Use Case:** Complete development guidelines, everything in one place

**What's Inside:**
- Automatic project audit checklist
- Full design system (colors, fonts, spacing)
- JavaScript, CSS, HTML standards
- Animation & interaction guidelines
- Responsive design standards
- Quality assurance checklist
- Git & deployment procedures
- Quick decision trees

**How to Use:**
1. Save this file as reference
2. Read the "CORE MISSION" section first
3. Follow "AUTOMATIC PROJECT AUDIT" when starting work
4. Refer to specific sections as needed

---

### 2. **SYSTEM-PROMPT.md** 🔧 FOR DETAILED WORK
**When:** Need in-depth guidance for specific phase
**Length:** Very long (~740 lines)
**Format:** Markdown with detailed explanations
**Use Case:** Implementation, architecture decisions, best practices

**What's Inside:**
- Phase-by-phase development guide (9 phases)
- Code architecture deep dive
- CSS architecture & patterns
- Animation quality standards
- Performance optimization strategies
- Accessibility requirements
- Documentation standards
- Maintenance guidelines

**How to Use:**
```
Task: Implement dark mode
→ Open SYSTEM-PROMPT.md
→ Go to Phase 3: Dark Mode Implementation
→ Follow detailed specifications
```

```
Task: Fix performance issues
→ Open SYSTEM-PROMPT.md
→ Go to Phase 4: Performance Analysis
→ Use optimization techniques
```

---

### 3. **PROMPT-QUICK-REFERENCE.md** ⚡ DAILY USE
**When:** Quick lookup, need rapid decision-making
**Length:** Short (~424 lines)
**Format:** Checklists, tables, templates
**Use Case:** Fast reference during active development

**What's Inside:**
- 5 fast prompt templates (copy-paste ready)
- Design principles checklist
- Project structure reference
- QA checklist (abbreviated)
- Common commands
- Red flags & fixes
- Performance targets
- Decision tree for scenarios

**How to Use:**
1. Keep this always open while working
2. Copy-paste template for your task
3. Use quick reference tables for lookups
4. Check decision tree when stuck

---

### 4. **PROJECT-STATUS.md** 📊 CURRENT STATE
**When:** Need to understand what's been done
**Length:** Medium (~371 lines)
**Format:** Markdown with project stats
**Use Case:** Project overview, feature verification

**What's Inside:**
- Current project status & version
- Phase completion status (1-5)
- Code statistics
- Feature checklist
- Design system details
- Git commit history
- Verification checklist
- Next optional steps

**How to Use:**
1. Read at start of session to understand context
2. Use verification checklist before deployment
3. Reference for feature availability
4. Guide for next phases

---

## 🗺️ Prompt Selection Guide

### Scenario 1: "I'm new to this project"
```
1. Read PROMPTS-INDEX.md (this file)
2. Skim PROJECT-STATUS.md (what exists)
3. Keep PROMPT-QUICK-REFERENCE.md open
4. Refer to MASTER-PROMPT.txt as needed
5. Bookmark SYSTEM-PROMPT.md for details
```

### Scenario 2: "I need to clean up the project"
```
Template: PROMPT-QUICK-REFERENCE.md → Template 1: Cleanup
Section: MASTER-PROMPT.txt → Phase 1: Project Audit
Detail: SYSTEM-PROMPT.md → Phase 1: Structure Base
```

### Scenario 3: "Make it look premium"
```
Template: PROMPT-QUICK-REFERENCE.md → Template 2: Visual Design
Section: MASTER-PROMPT.txt → Design System + Animation Standards
Detail: SYSTEM-PROMPT.md → Phase 2-4: Design & Animation
```

### Scenario 4: "It's too slow"
```
Template: PROMPT-QUICK-REFERENCE.md → Template 4: Performance
Section: MASTER-PROMPT.txt → Animation Performance Guidelines
Detail: SYSTEM-PROMPT.md → Phase 4: Performance Analysis
```

### Scenario 5: "Looks bad on mobile"
```
Template: PROMPT-QUICK-REFERENCE.md → Template 5: Responsive
Section: MASTER-PROMPT.txt → Responsive Design Standards
Detail: SYSTEM-PROMPT.md → Phase 5: Responsive & Performance
```

### Scenario 6: "Before I deploy"
```
1. Use PROMPT-QUICK-REFERENCE.md QA Checklist
2. Read PROJECT-STATUS.md Verification Checklist
3. Follow DEPLOYMENT-GUIDE.md steps
4. Verify MASTER-PROMPT.txt Pre-Deployment section
```

---

## 📋 Prompt Comparison Table

| Aspect | MASTER-PROMPT | SYSTEM-PROMPT | QUICK-REFERENCE | PROJECT-STATUS |
|--------|---|---|---|---|
| **Length** | ~764 lines | ~740 lines | ~424 lines | ~371 lines |
| **Format** | Text | Markdown | Markdown | Markdown |
| **Read Time** | 45 min | 50 min | 15 min | 10 min |
| **Use Case** | Reference | Deep dive | Daily work | Overview |
| **Best For** | Complete guide | Implementation | Quick lookup | Context |
| **Keep Open** | When learning | When coding | Always | Once per session |
| **Bookmark** | ⭐ Yes | ⭐ Yes | ⭐⭐ Yes | Yes |
| **Print** | Optional | No | Yes (reference) | Yes |

---

## 🔍 Quick Decision Matrix

```
Question: What do I need right now?

├─ "What has been completed?"
│  └─ → PROJECT-STATUS.md
│
├─ "How do I do X?"
│  ├─ "Fast answer" → PROMPT-QUICK-REFERENCE.md
│  └─ "Full details" → SYSTEM-PROMPT.md
│
├─ "I need everything"
│  └─ → MASTER-PROMPT.txt
│
├─ "Is my code good quality?"
│  └─ → TECHNICAL-REVIEW.md (separate file)
│
└─ "How do I deploy?"
   └─ → DEPLOYMENT-GUIDE.md (separate file)
```

---

## 📚 All Available Prompt Files

### Core Prompts (THIS INDEX)
- **PROMPTS-INDEX.md** ← You are here
- **MASTER-PROMPT.txt** - Complete guidelines (primary reference)
- **SYSTEM-PROMPT.md** - Detailed development guide
- **PROMPT-QUICK-REFERENCE.md** - Fast daily reference

### Project Documentation
- **PROJECT-STATUS.md** - Current state & features
- **TECHNICAL-REVIEW.md** - Quality assessment
- **DEPLOYMENT-GUIDE.md** - How to ship

### Code Documentation
- **README.md** - Project overview
- **IMPROVEMENTS-COMPLETED.md** - What's been done

---

## 💡 Pro Tips for Using Prompts

### Tip 1: The "3-Level" Approach
```
Level 1: Quick lookup
→ PROMPT-QUICK-REFERENCE.md (30 seconds)

Level 2: Moderate detail
→ MASTER-PROMPT.txt section (5-10 minutes)

Level 3: Deep dive
→ SYSTEM-PROMPT.md phase (15-30 minutes)
```

### Tip 2: Bookmark These Sections
In MASTER-PROMPT.txt:
- CORE MISSION (page start)
- AUTOMATIC PROJECT AUDIT (before every session)
- DESIGN SYSTEM (colors, fonts, effects)
- QA CHECKLIST (before deployment)

In SYSTEM-PROMPT.md:
- Phase 1: Cleanup (first time)
- Phase 2: Design Strategy (visual work)
- Phase 6: QA Checklist (before shipping)

In PROMPT-QUICK-REFERENCE.md:
- Fast Prompt Templates (copy-paste)
- Common Commands (terminal reference)
- Red Flags & Fixes (troubleshooting)

### Tip 3: Copy-Paste Templates
```
Use PROMPT-QUICK-REFERENCE.md templates directly:

1. Find the template for your task
2. Copy the entire prompt text
3. Use in AI conversation
4. Replace placeholders with specific details
5. Provide context and current state

Example:
[Use Template 2: Visual Design Enhancement]
+ [Describe what currently exists]
+ [Show screenshot or code samples]
+ [Ask specific question about implementation]
```

### Tip 4: Reference During Development
Keep PROMPT-QUICK-REFERENCE.md open in another window while coding:
- Check QA checklist before committing
- Reference design system for colors/fonts
- Use red flags & fixes when stuck
- Follow common commands section

### Tip 5: Build Your Own Checklist
Create a personal checklist from QA sections:
```
MY ARQUITECT CHECKLIST:
☐ npm run validate
☐ Test at 320px, 768px, 1024px
☐ Dark mode toggle works
☐ No console errors
☐ Lighthouse > 90
☐ Git status clean
☐ All links work
☐ Images load
```

---

## 🎓 Learning Path

### Week 1: Foundation
```
Monday: Read PROMPTS-INDEX.md (this file)
Tuesday: Read PROJECT-STATUS.md (understand what exists)
Wednesday: Skim MASTER-PROMPT.txt (get overview)
Thursday: Read PROMPT-QUICK-REFERENCE.md (daily tool)
Friday: Read SYSTEM-PROMPT.md Phase 1 (cleanup guide)
```

### Week 2: Implementation
```
Monday: Use Template 1 (cleanup project)
Tuesday: Use Template 2 or 3 (implement feature)
Wednesday: Verify with QA Checklist
Thursday: Test across browsers
Friday: Read DEPLOYMENT-GUIDE.md
```

### Ongoing: Mastery
```
Always: Keep PROMPT-QUICK-REFERENCE.md open
Daily: Check decision tree before coding
Weekly: Review PROJECT-STATUS.md progress
Monthly: Re-read SYSTEM-PROMPT.md phase for your work
Quarterly: Review TECHNICAL-REVIEW.md for code quality
```

---

## 🚨 When You're Stuck

```
"I don't know how to do X"

1. Open PROMPT-QUICK-REFERENCE.md
2. Look in "Common Commands" or "Red Flags & Fixes"
3. Still confused?
   → Go to MASTER-PROMPT.txt section
4. Still stuck?
   → Go to SYSTEM-PROMPT.md phase
5. Still need help?
   → Check PROJECT-STATUS.md or TECHNICAL-REVIEW.md
```

---

## 📱 Print-Friendly Versions

### What to Print
- PROMPT-QUICK-REFERENCE.md (excellent printed reference)
- MASTER-PROMPT.txt section on QA Checklist
- Design System color palette
- Common Commands reference

### What to Keep Digital
- SYSTEM-PROMPT.md (too long, use searchable)
- PROJECT-STATUS.md (updates frequently)
- All code documentation

---

## 🎯 Success Indicators

You're using the prompts correctly if:

✅ You know where to find answers quickly
✅ You rarely have syntax errors
✅ Code reviews are quick (clean code)
✅ Deployments go smoothly
✅ You can explain design decisions
✅ Mobile & desktop both work
✅ Performance is > 95 Lighthouse
✅ Team understands the code

---

## 📞 FAQ About Prompts

**Q: Which prompt should I start with?**
A: PROMPTS-INDEX.md (this file), then PROJECT-STATUS.md

**Q: Can I use just one prompt?**
A: Yes! MASTER-PROMPT.txt has everything. Others are convenience.

**Q: Should I memorize the prompts?**
A: No! Use them as references. Bookmark key sections.

**Q: Can I share these with other developers?**
A: Yes! They're designed to onboard new team members.

**Q: Do I need all 4 prompts?**
A: MASTER-PROMPT.txt + QUICK-REFERENCE.md are essential.
Others are helpful but optional.

**Q: How often should I read them?**
A: First full read: 2-3 hours
Subsequent lookups: 5-30 seconds

**Q: Can I modify the prompts?**
A: Yes! Add your own notes/sections for your team.

**Q: What if I disagree with something?**
A: Discuss with team. These are guidelines, not laws.

---

## 🔗 Navigation Guide

```
START HERE
    ↓
[PROMPTS-INDEX.md]  ← You are here
    ↓
Choose your task:
    ├─ "Understand the project" → PROJECT-STATUS.md
    ├─ "Need everything" → MASTER-PROMPT.txt
    ├─ "Daily work" → PROMPT-QUICK-REFERENCE.md
    ├─ "Deep dive" → SYSTEM-PROMPT.md
    ├─ "Quality check" → TECHNICAL-REVIEW.md
    └─ "Deploy" → DEPLOYMENT-GUIDE.md
```

---

## 📝 Checklist for This Session

Before you start working:

- [ ] I've read PROMPTS-INDEX.md
- [ ] I know which prompt to use for my task
- [ ] I've bookmarked key sections
- [ ] I understand the design system
- [ ] I know the QA checklist
- [ ] I'm ready to code with confidence

---

## ✨ Final Note

These prompts represent **enterprise-grade standards** for web design and development. They ensure:

- **Consistency** - Everyone codes the same way
- **Quality** - No mediocre work ships
- **Scalability** - Code grows without becoming a mess
- **Maintainability** - Future developers understand your work
- **Excellence** - ARQUITECT brand is represented perfectly

**Use them. Follow them. Become excellent.**

---

**Last Updated:** April 24, 2026  
**Total Prompts:** 4 comprehensive guides  
**Total Lines:** 2,900+ lines of guidance  
**Purpose:** Enterprise-grade web development

You have everything you need. Now go build something amazing.

