"use client";

import { useState, useEffect } from "react";
import {
  User,
  GraduationCap,
  BookOpen,
  Share2,
  Ticket,
  ArrowRight,
  PartyPopper,
  ChevronsUpDown,
  Check,
  Phone
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import Link from "next/link";

const platforms = [
  { value: "social_media", label: "Social Media" },
  { value: "friend", label: "Friend or Colleague" },
  { value: "email", label: "Email Newsletter" },
  { value: "website", label: "Website" },
  { value: "university", label: "University" },
  { value: "other", label: "Other" },
];

// Define TypeScript interfaces
interface FormData {
  name: string;
  status: string;
  year: string;
  program: string;
  platform: string;
  ticket: string;
  phone: string; // Add phone field
}

interface FormErrors {
  name?: string;
  status?: string;
  year?: string;
  program?: string;
  platform?: string;
  ticket?: string;
  phone?: string; // Add phone field
}

interface Registration extends FormData {
  id: number;
  timestamp: string;
}

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    status: "graduate",
    year: "",
    program: "",
    platform: "",
    ticket: "p100",
    phone: "" // Initialize phone field
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  // Load saved registrations from localStorage on component mount
  useEffect(() => {
    const savedRegistrations = localStorage.getItem('registrations');
    if (savedRegistrations) {
      try {
        setRegistrations(JSON.parse(savedRegistrations) as Registration[]);
      } catch (error) {
        console.error('Error loading saved registrations:', error);
      }
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (formData.status === "student" && !formData.year) {
      newErrors.year = "Please select your year of study.";
    }

    if (!formData.program || formData.program.length < 2) {
      newErrors.program = "Program of study is required.";
    }

    if (!formData.platform) {
      newErrors.platform = "Please select how you heard about us.";
    }

    if (!formData.ticket) {
      newErrors.ticket = "Please select a ticket type.";
    }

    if (!formData.phone || !/^\d{8}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 8-digit phone number like 72148273.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration saved:', data);
      } else {
        console.error('Failed to save registration');
      }
    } catch (error) {
      console.error('Error saving registration:', error);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = (): void => {
    setFormData({
      name: "",
      status: "graduate",
      year: "",
      program: "",
      platform: "",
      ticket: "p100",
      phone: "" // Reset phone field
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const exportRegistrations = (): void => {
    // Export all registrations as JSON
    const dataStr = JSON.stringify(registrations, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = 'registrations.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-slate-100">
        <Card className="w-full max-w-md border-0 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2" />
          <CardHeader className="space-y-1 pb-6">
            <div className="flex justify-center mb-2">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                <PartyPopper className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-center text-slate-800">
              Registration Complete!
            </CardTitle>
            <CardDescription className="text-center text-slate-600 text-base">
              Thank you for registering for the FutureGen Supply Chain Forum.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <Button
              onClick={resetForm}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold px-8 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Register Another Person
            </Button>
            <Link href="/">
              <Button
                variant="outline"
                className="w-full mt-4"
              >
                Go Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-slate-100">
      <Card className="w-full max-w-md border-0 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2" />
        <CardHeader className="space-y-1 pb-2">
          <CardTitle className="text-2xl font-bold text-center text-slate-800">
            FutureGen Supply Chain Forum
          </CardTitle>
          <CardDescription className="text-center text-slate-600 text-base">
            Register for our upcoming event
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center text-slate-700 font-bold">
                  <User className="h-4 w-4 mr-2 text-blue-500" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label className="flex items-center text-slate-700 font-bold">
                  <GraduationCap className="h-4 w-4 mr-2 text-blue-500" />
                  Status
                </Label>
                <RadioGroup
                  value={formData.status}
                  onValueChange={(value) => handleInputChange('status', value)}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem id="graduate" value="graduate" className="text-blue-500 border-slate-300" />
                    <Label htmlFor="graduate" className="font-normal text-slate-700">Graduate</Label>
                  </div>
                  <div className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem id="student" value="student" className="text-blue-500 border-slate-300" />
                    <Label htmlFor="student" className="font-normal text-slate-700">Student</Label>
                  </div>
                </RadioGroup>
                {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
              </div>

              {formData.status === "student" && (
                <div className="space-y-2">
                  <Label htmlFor="year" className="flex items-center text-slate-700 font-bold">
                    <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
                    Year of Study
                  </Label>
                  <Select value={formData.year} onValueChange={(value) => handleInputChange('year', value)}>
                    <SelectTrigger id="year" className="border-slate-200 focus:ring-blue-500">
                      <SelectValue placeholder="Select your year of study" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">First Year</SelectItem>
                      <SelectItem value="2">Second Year</SelectItem>
                      <SelectItem value="3">Third Year</SelectItem>
                      <SelectItem value="4">Fourth Year</SelectItem>
                      <SelectItem value="5">Fifth Year</SelectItem>
                      <SelectItem value="postgrad">Postgraduate</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="program" className="flex items-center text-slate-700 font-bold">
                  <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
                  Program of Study
                </Label>
                <Input
                  id="program"
                  placeholder="Enter your program of study"
                  value={formData.program}
                  onChange={(e) => handleInputChange('program', e.target.value)}
                  className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.program && <p className="text-red-500 text-sm mt-1">{errors.program}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center text-slate-700 font-bold">
                  <Phone className="h-4 w-4 mr-2 text-blue-500" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="platform" className="flex items-center text-slate-700 font-bold">
                  <Share2 className="h-4 w-4 mr-2 text-blue-500" />
                  How did you learn about FutureGen Supply Chain Forum?
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between border-slate-200 focus:ring-blue-500",
                        !formData.platform && "text-muted-foreground",
                      )}
                    >
                      {formData.platform
                        ? platforms.find((platform) => platform.value === formData.platform)?.label
                        : "Select platform"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search platform..." />
                      <CommandList>
                        <CommandEmpty>No platform found.</CommandEmpty>
                        <CommandGroup>
                          {platforms.map((platform) => (
                            <CommandItem
                              value={platform.label}
                              key={platform.value}
                              onSelect={() => handleInputChange('platform', platform.value)}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4 text-blue-500",
                                  platform.value === formData.platform ? "opacity-100" : "opacity-0",
                                )}
                              />
                              {platform.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                {errors.platform && <p className="text-red-500 text-sm mt-1">{errors.platform}</p>}
              </div>

              <div className="space-y-2">
                <Label className="flex items-center text-slate-700 font-bold">
                  <Ticket className="h-4 w-4 mr-2 text-blue-500" />
                  Which ticket are you paying for?
                </Label>
                <RadioGroup
                  value={formData.ticket}
                  onValueChange={(value) => handleInputChange('ticket', value)}
                  className="flex flex-col space-y-3"
                >
                  <div className="flex items-start space-x-3 space-y-0 rounded-lg border border-slate-200 p-4 hover:bg-blue-50 transition-colors">
                    <RadioGroupItem
                      id="p100"
                      value="p100"
                      className="mt-1 text-blue-500 border-slate-300"
                    />
                    <div className="space-y-1">
                      <Label htmlFor="p100" className="font-bold text-slate-800">
                        P100 (Certificate included) ✅
                      </Label>
                      <p className="text-xs text-slate-500">
                        Full access to the event with certificate of participation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 space-y-0 rounded-lg border border-slate-200 p-4 hover:bg-blue-50 transition-colors">
                    <RadioGroupItem
                      id="p80"
                      value="p80"
                      className="mt-1 text-blue-500 border-slate-300"
                    />
                    <div className="space-y-1">
                      <Label htmlFor="p80" className="font-bold text-slate-800">
                        P80 (Certificate exclusive) ✅
                      </Label>
                      <p className="text-xs text-slate-500">
                        Full access to the event without certificate
                      </p>
                    </div>
                  </div>
                </RadioGroup>
                {errors.ticket && <p className="text-red-500 text-sm mt-1">{errors.ticket}</p>}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm text-slate-500 pb-6">
          Our team will be in contact to formally register you and give you a ticket entrance code.
        </CardFooter>
      </Card>
    </div>
  );
}
