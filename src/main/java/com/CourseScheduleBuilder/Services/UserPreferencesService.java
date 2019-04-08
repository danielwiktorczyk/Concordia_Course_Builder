package com.CourseScheduleBuilder.Services;

public interface UserPreferencesService {
    void destroyPreferences();
    boolean preferencesPresent();
    boolean createPreferences(boolean mm, boolean me, boolean mall, boolean tm, boolean te, boolean tall, boolean wm, boolean we, boolean wall, boolean thm, boolean the, boolean thall, boolean fm, boolean fe, boolean fall);
    int[] getMonday();
    int[] getTuesday();
    int[] getWednesday();
    int[] getThursday();
    int[] getFriday();
}
