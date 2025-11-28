---
title: 'Migrating to Astro 4.0'
description: 'Exploring the new View Transitions API and significant performance improvements'
pubDate: '2023-11-20'
tags: ['astro', 'performance']
---

## hey

### heading 3

**bold text** hey

```
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <iomanip>

class Task {
public:
    std::string name;
    int priority;
    bool completed;

    Task(std::string n, int p) : name(n), priority(p), completed(false) {}
};

class TaskManager {
private:
    std::vector<Task> tasks;

public:
    void addTask(const std::string &name, int priority) {
        tasks.emplace_back(name, priority);
    }

    void markComplete(const std::string &name) {
        for (auto &t : tasks) {
            if (t.name == name) {
                t.completed = true;
                return;
            }
        }
        std::cout << "Task not found!\n";
    }

    void printTasks() {
        std::cout << "\n--- Task List ---\n";
        for (const auto &t : tasks) {
            std::cout << std::left << std::setw(15) << t.name
                      << " Priority: " << t.priority
                      << " | Status: " << (t.completed ? "Done" : "Pending")
                      << "\n";
        }
    }

    void showStats() {
        int completed = 0;
        for (const auto &t : tasks)
            if (t.completed) completed++;

        std::cout << "\n== Statistics ==\n";
        std::cout << "Total tasks: " << tasks.size() << "\n";
        std::cout << "Completed tasks: " << completed << "\n";
        std::cout << "Pending tasks: " << tasks.size() - completed << "\n";
    }
};

int main() {
    TaskManager manager;

    manager.addTask("Study", 2);
    manager.addTask("Workout", 1);
    manager.addTask("Buy groceries", 3);

    manager.markComplete("Workout");

    manager.printTasks();
    manager.showStats();

    return 0;
}

```
